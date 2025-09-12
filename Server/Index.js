require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const adminAuthRouter = require('./adminAuth');
const adminPasswordReset = require('./adminPasswordReset');
const axios = require('axios');
const msal = require('@azure/msal-node');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // your Netlify site URL
  methods: ['POST', 'GET', 'PATCH'],
  credentials: true
}));


app.use(express.json());

// Azure MSSQL config
const config = {
  server: process.env.SQL_SERVER,
  port: parseInt(process.env.SQL_PORT),
  database: process.env.SQL_DATABASE,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

// MSAL and email setup
const AAD_TENANT_ID = process.env.AAD_TENANT_ID;
const AAD_CLIENT_ID = process.env.AAD_CLIENT_ID;
const AAD_CLIENT_SECRET = process.env.AAD_CLIENT_SECRET;
const USER_ID = process.env.USER_ID; // sender email

const msalConfig = {
    auth: {
        clientId: AAD_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${AAD_TENANT_ID}`,
        clientSecret: AAD_CLIENT_SECRET,
    },
};
const cca = new msal.ConfidentialClientApplication(msalConfig);

async function getAccessToken() {
    const tokenRequest = {
        scopes: ['https://graph.microsoft.com/.default'],
    };
    try {
        const response = await cca.acquireTokenByClientCredential(tokenRequest);
        return response.accessToken;
    } catch (error) {
        console.error('Error acquiring access token:', error.message);
        throw new Error('Could not acquire access token.');
    }
}

async function sendEmail(accessToken, mailOptions) {
    if (!accessToken) throw new Error('Access token is missing.');
    if (!mailOptions || !mailOptions.to || !mailOptions.subject || !mailOptions.body) throw new Error('Mail options (to, subject, body) are required.');
    const sendMailEndpoint = `https://graph.microsoft.com/v1.0/users/${USER_ID}/sendMail`;
    const emailMessage = {
        message: {
            subject: mailOptions.subject,
            body: { contentType: 'HTML', content: mailOptions.body },
            toRecipients: [{ emailAddress: { address: mailOptions.to } }],
        },
        saveToSentItems: 'true',
    };
    try {
        await axios.post(sendMailEndpoint, emailMessage, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error sending email:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
        throw new Error('Failed to send email.');
    }
}

// POST: insert form data
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, organization, message } = req.body;
  try {
    const pool = await sql.connect(config);
    await pool.request()
      .input('name', sql.VarChar(100), name)
      .input('email', sql.VarChar(100), email)
      .input('phone', sql.VarChar(20), phone)
      .input('organization', sql.VarChar(100), organization)
      .input('message', sql.Text, message)
      .query(`
        INSERT INTO Demo (name, email, phone, organization, message)
        VALUES (@name, @email, @phone, @organization, @message)
      `);

    // Send email to admin and user
    const accessToken = await getAccessToken();
    // Email to admin
    await sendEmail(accessToken, {
      to: 'noreply@chroniccarebridge.com',
      subject: 'New Demo Request Submitted',
      body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <img src="https://ccmwebsite.netlify.app/images/Logo.png" alt="Company Logo" style="max-width: 180px; margin-bottom: 20px;" />
          <h2 style="color:#004080;">New Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Organization:</strong> ${organization}</p>
          <p><strong>Message:</strong> ${message || 'No additional message provided.'}</p>
          <hr style="margin:20px 0; border:none; border-top:1px solid #ddd;" />
          <p style="font-size:12px; color:#888;">This is an automated notification from Chronic Care Bridge.</p>
        </div>
      `
    });


      // Email to user
    // await sendEmail(accessToken, {
    //   to: email,
    //   subject: 'Thank You for Scheduling a Demo with Chronic Care Bridge',
    //   body: `
    //   <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;color:#333;border:1px solid #eee;border-radius:8px;overflow:hidden;">
      
    //   <!-- Header -->
    //   <div style="background:rgb(255,255,255);padding:20px;text-align:center;">
    //   <img src="https://ccmwebsite.netlify.app/images/Logo.png" alt="Chronic Care Bridge" style="max-width:260px;">
    //   </div>
      
    //   <!-- Body -->
    //   <div style="padding:30px;">
    //   <h2 style="color:rgb(0,38,119);margin-top:0;">Thank You, ${name}!</h2>
    //   <p style="font-size:16px;line-height:1.6;">
    //   We’ve received your request to schedule a demo with 
    //   <strong>Chronic Care Bridge</strong>.  
    //   </p>
    //     <p style="font-size:16px;line-height:1.6;">
    //     Our team will review your request and contact you shortly.  
    //     In the meantime, feel free to explore our solutions on our website.
    //     </p>
      
    //   <!-- CTA -->
    //   <div style="margin:25px 0;text-align:center;">
    //   <a href="https://ccmwebsite.netlify.app/#/" 
    //   style="background:rgb(0,38,119);color:#fff;padding:12px 24px;text-decoration:none;
    //   border-radius:6px;font-weight:bold;display:inline-block;">
    //   Visit Our Website
    //   </a>
    //   </div>

    //   <p style="font-size:14px;color:#555;">
    //   Please do not reply to this email. If your request is urgent or requires immediate attention, please call us at <a href="tel:(832)617-6222" style="color:#002677;text-decoration:none;">(832) 617-6222</a>.
    //   </p>

    //   <p style="margin-top:30px;">Best regards,</p>
    //   <p style="font-weight:bold;">The Chronic Care Bridge Team</p>
    //   </div>
      
    //   <!-- Footer -->
    //   <div style="background:#f9f9f9;padding:20px;text-align:center;font-size:12px;color:#777;">
    //   <p>© ${new Date().getFullYear()} Chronic Care Bridge. All rights reserved.</p>
    //   <p>
    //   <a href="https://www.linkedin.com/company/" style="color:rgb(0,38,119);text-decoration:none;">LinkedIn</a> | 
    //   <a href="https://twitter.com/" style="color:rgb(0,38,119);text-decoration:none;">Twitter</a> | 
    //   <a href="https://www.chroniccarebridge.com" style="color:rgb(0,38,119);text-decoration:none;">Website</a>
    //   </p>
    //   </div>
    //   </div>
    //   `
    // });
    await sendEmail(accessToken, {
      to: email,
      subject: 'Thank You for Scheduling a Demo with Chronic Care Bridge',
      body: `
      <div style="background:#ffffff;padding:20px 0;">
        <center>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" 
                style="max-width:600px;background:#ffffff;
                font-family:Arial,sans-serif;color:#333;
                border:1px solid #eee;border-radius:8px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#ffffff;padding:20px;text-align:center;">
                <img src="https://ccmwebsite.netlify.app/images/Logo.png" alt="Chronic Care Bridge" 
                    style="max-width:260px;width:100%;height:auto;">
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px;">
                <h2 style="color:rgb(0,38,119);margin-top:0;">Thank You, ${name}!</h2>
                <p style="font-size:16px;line-height:1.6;">
                  We’ve received your request to schedule a demo with 
                  <strong>Chronic Care Bridge</strong>.
                </p>
                <p style="font-size:16px;line-height:1.6;">
                  Our team will review your request and contact you shortly.  
                  In the meantime, feel free to explore our solutions on our website.
                </p>

                <!-- CTA -->
                <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin:25px auto;">
                  <tr>
                    <td bgcolor="#002677" style="border-radius:6px;">
                      <a href="https://ccmwebsite.netlify.app/#/" 
                        style="display:inline-block;padding:12px 24px;
                        color:#ffffff;text-decoration:none;font-weight:bold;">
                        Visit Our Website
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="font-size:14px;color:#555;">
                  Please do not reply to this email. If your request is urgent or requires immediate attention, please call us at 
                  <a href="tel:(832)617-6222" style="color:#002677;text-decoration:none;">(832) 617-6222</a>.
                </p>

                <p style="margin-top:30px;">Best regards,</p>
                <p style="font-weight:bold;">The Chronic Care Bridge Team</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f9f9f9;padding:20px;text-align:center;font-size:12px;color:#777;">
                <p>© ${new Date().getFullYear()} Chronic Care Bridge. All rights reserved.</p>
                <p>
                  <a href="https://www.linkedin.com/company/" style="color:rgb(0,38,119);text-decoration:none;">LinkedIn</a> | 
                  <a href="https://twitter.com/" style="color:rgb(0,38,119);text-decoration:none;">Twitter</a> | 
                  <a href="https://www.chroniccarebridge.com" style="color:rgb(0,38,119);text-decoration:none;">Website</a>
                </p>
              </td>
            </tr>

          </table>
        </center>
      </div>
      `
    });



    res.status(200).send('Form submitted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving form');
  }
});


// GET: fetch submissions with optional status filter
// /api/submissions?status=active|deleted|archived|all
app.get('/api/submissions', async (req, res) => {
  const { status } = req.query;
  let query = 'SELECT * FROM Demo';
  if (status && status !== 'all') {
    query += ' WHERE status = @status';
  }
  query += ' ORDER BY submitted_at DESC';
  try {
    const pool = sql.connect(config);
    const request = (await pool).request();
    if (status && status !== 'all') request.input('status', sql.VarChar(20), status);
    const result = await request.query(query);
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving submissions');
  }
});

// PATCH: update status (delete, restore, archive, unarchive)
app.patch('/api/submissions/:id/status', async (req, res) => {
  const { id } = req.params;
  console.log("Entering status update");
  const { status } = req.body;
  if (!['active', 'deleted', 'archived'].includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }
  try {
    const pool = sql.connect(config);
    await (await pool).request()
      .input('id', sql.Int, id)
      .input('status', sql.VarChar(20), status)
      .query('UPDATE Demo SET status = @status WHERE id = @id');
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to update status' });
  }
});

// PATCH: mark as read/unread (now using status_read column)
app.patch('/api/submissions/:id/read', async (req, res) => {
  const { id } = req.params;
  const { read } = req.body;
  if (typeof read !== 'boolean') {
    return res.status(400).json({ success: false, message: 'Invalid read value' });
  }
  try {
    const pool = sql.connect(config);
    await (await pool).request()
      .input('id', sql.Int, id)
      .input('status_read', sql.Bit, read ? 1 : 0)
      .query('UPDATE Demo SET status_read = @status_read WHERE id = @id');
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to update read status' });
  }
});

// Admin login route


// Admin authentication route

// Forgot Password: Request OTP
// Hardcoded admin email for password reset
const ADMIN_EMAIL = 'NoReply@chroniccarebridge.com'; // Change as needed
app.post('/api/admin-forgot-password', async (req, res) => {
  // Ignore req.body.email, always use ADMIN_EMAIL
  const email = ADMIN_EMAIL;
  // Generate OTP
  const otp = adminPasswordReset.generateOTP();
  adminPasswordReset.setOTP(email, otp);
  try {
    const accessToken = await getAccessToken();
    await sendEmail(accessToken, {
      to: email,
      subject: 'Your CCM Admin Password Reset Code',
      body: `<p>Your password reset code is: <b>${otp}</b></p><p>This code will expire in 10 minutes.</p>`
    });
    res.json({ success: true, message: 'OTP sent to email.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to send OTP.' });
  }
});

// Verify OTP
app.post('/api/admin-verify-otp', (req, res) => {
  const { otp } = req.body;
  const email = ADMIN_EMAIL;
  if (!otp) return res.status(400).json({ success: false, message: 'OTP required.' });
  const result = adminPasswordReset.verifyOTP(email, otp);
  if (result.valid) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: result.reason });
  }
});

// Reset Password
app.post('/api/admin-reset-password', async (req, res) => {
  const { otp, newPassword } = req.body;
  const email = ADMIN_EMAIL;
  if (!otp || !newPassword) return res.status(400).json({ success: false, message: 'OTP and new password required.' });
  const result = adminPasswordReset.verifyOTP(email, otp);
  if (!result.valid) return res.status(400).json({ success: false, message: result.reason });
  try {
    const pool = await sql.connect(config);
    await pool.request()
      .input('email', sql.VarChar(100), email)
      .input('password', sql.VarChar(100), newPassword)
      .query('UPDATE Admins SET password = @password WHERE username = @email');
    adminPasswordReset.clearOTP(email);
    res.json({ success: true, message: 'Password reset successful.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to reset password.' });
  }
});

app.use(adminAuthRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the CCM Website API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// Export for use in other modules
module.exports = { sendEmail, getAccessToken };
