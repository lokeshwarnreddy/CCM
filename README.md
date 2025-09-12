# Chronic Care Bridge Website

A full-stack web application for Chronic Care Bridge, providing healthcare management solutions. This project includes a React frontend and a Node.js/Express backend connected to an Azure SQL database.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Frontend Details](#frontend-details)
- [Backend Details](#backend-details)
- [Admin Portal](#admin-portal)
- [Where to Change Backend/Frontend Links](#where-to-change-backendfrontend-links)
- [Deployment](#deployment)
- [Contributing & Updating](#contributing--updating)
- [Troubleshooting](#troubleshooting)

---

## Project Structure

```
ccm-website/
├── public/                # Static assets and index.html
├── src/                   # React frontend source code
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components (Home, AboutUs, Admin, etc.)
│   ├── styles/            # CSS files for styling
│   └── App.js             # Main React app
├── Server/                # Backend Node.js/Express server
│   ├── Index.js           # Main server file
│   ├── initSchema.js      # DB schema initialization
│   └── .env               # Backend environment variables
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

---

## Setup & Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)
- Access to Azure SQL (for backend)

### 1. Clone the repository
```sh
git clone <your-repo-url>
cd ccm-website
```

### 2. Install dependencies
```sh
npm install
cd Server
npm install
```

### 3. Configure Environment Variables
- Copy `Server/.env.example` to `Server/.env` (if not present, create `.env`):

```
SQL_SERVER=your-azure-sql-server.database.windows.net
SQL_PORT=1433
SQL_DATABASE=your-database-name
SQL_USER=your-db-username
SQL_PASSWORD=your-db-password
PORT=5000
```

---

## Running the Project

### Start Backend (in /Server):
```sh
node Index.js
```

### Start Frontend (in project root):
```sh
npm start
```

- The frontend runs on [http://localhost:3000](http://localhost:3000)
- The backend runs on [http://localhost:5000](http://localhost:5000)

---

## Frontend Details
- Built with **React** (see `src/`)
- Routing via `react-router-dom`
- Main entry: `src/App.js`
- API calls use **Axios**
- Styles in `src/styles/` and per-page CSS files
- Responsive design for mobile/tablet/desktop
- Admin login at `/admin` (see [Admin Portal](#admin-portal))

---

## Backend Details
- Built with **Node.js** and **Express** (see `Server/`)
- Connects to **Azure SQL** using `mssql` package
- Main server: `Server/Index.js`
- API endpoints:
  - `POST /api/contact` — Save contact form submissions
  - `GET /api/submissions` — Retrieve all submissions (for admin dashboard)
- Schema auto-creation: `Server/initSchema.js` (creates `Demo` table if not exists)
- Environment variables in `Server/.env`

---

## Admin Portal
- **Login:** `/admin` (username and password are hardcoded in `src/pages/AdminLogin.js` for demo; use env/server for production)
- **Dashboard:** `/admin-dashboard` (protected route)
- **Features:**
  - View, search, and paginate client submissions
  - Logout button to end session
- **Session:** Uses `localStorage` key `admin-auth` for authentication

---

## Where to Change Backend/Frontend Links

### Frontend → Backend API URL
- In development, API requests are proxied to the backend via the `proxy` field in `package.json`:
  ```json
  "proxy": "http://localhost:5000"
  ```
- For production, update the Axios base URL in files like `src/pages/AdminDashboard.js`:
  ```js
  axios.get('https://your-backend-url/api/submissions')
  ```
- **To change:** Search for `axios` calls and update the URL as needed.
-   In `src/components/ContactSection.js`, look for the Axios POST call:
  ```js
  await axios.post('https://ccm-backend-production.up.railway.app/api/contact', formData);
  ```
  - **To change the backend link:**  
    Replace the URL above with your new backend endpoint.

### Backend → Frontend CORS
- In `Server/Index.js`, update the `origin` in the CORS config:
  ```js
  app.use(cors({
    origin: 'https://your-frontend-url',
    ...
  }));
  ```

- **To change:** Edit the `origin` to match your deployed frontend URL.

---

## Deployment
- **Frontend:** Deploy `build/` folder to Netlify
- **Backend:** Deploy `Server/` to Railway
- **Environment variables:** Set in your host's dashboard (never commit secrets)
- **CORS:** Ensure backend CORS allows your frontend domain

---

## Contributing & Updating
- Use clear commit messages
- Keep credentials and secrets out of source control
- Update dependencies with `npm update`
- For new features, follow the structure in `src/pages/` and `src/components/`
- For backend changes, update `Server/Index.js` and test endpoints with Postman
- Document major changes in this README

---

## Troubleshooting
- **Frontend can't reach backend?**
  - Check backend is running and CORS is configured
  - Check API URLs and proxy settings
- **Database errors?**
  - Check Azure SQL firewall and credentials in `.env`
- **Admin login not working?**
  - Check credentials in `src/pages/AdminLogin.js`
- **Schema not initializing?**
  - Run `node initSchema.js` in `Server/` and check for errors

---

## Contact
For questions or help, contact the project maintainer.

---

## 📁 Detailed Structure: Components, Pages, and Styles

### 1. Components (`src/components/`)
Reusable UI blocks used across pages. Each component often has a matching CSS file in `src/styles/`.

| Component                | Description                                      | Associated Style File                |
|--------------------------|--------------------------------------------------|--------------------------------------|
| `NavBar.js`              | Top navigation bar (site-wide)                   | `styles/NavBar.css`                  |
| `Footer.js`              | Footer at the bottom (site-wide)                 | `styles/Footer.css`                  |
| `HeroSection.js`         | Main hero/banner section                         | `styles/HeroSection.css`             |
| `ImageWithTextSection.js`| Section with image and text (used on many pages) | `styles/ImageWithTextSection.css`    |
| `Partner.js`             | Partner logos/section                            | `styles/Partner.css`                 |
| `WhoWeServe.js`          | Who We Serve section                             | `styles/WhoWeServe.css`              |
| `ServicesSection.js`     | Services overview section                        | `styles/ServicesSection.css`         |
| `ServicePageLayout.js`   | Layout for service detail pages                  | `styles/ServicePageLayout.css`       |
| `CCMFeatures.js`         | Features for Chronic Care Management             | `styles/CCMFeatures.css`             |
| `ContactSection.js`      | Contact/demo request form                        | `styles/ContactSection.css`          |
| `AdminProtectedRoute.js` | Protects admin routes (auth check)               | (No style needed)                    |

**How to update a component’s style:**
Find the component in `src/components/` and its CSS in `src/styles/`.
Example: To style the contact form, edit `ContactSection.js` and `ContactSection.css`.

---

### 2. Pages (`src/pages/`)
Each file in `src/pages/` is a route/page in your app.

| Page File                        | Route/URL Path                        | Description                                 | Associated Style File(s)                |
|---------------------------------- |---------------------------------------|---------------------------------------------|-----------------------------------------|
| `Home.js`                        | `/`                                   | Home page                                   | (various section styles)                |
| `AboutUs.js`                     | `/about`                              | About Us page                               | `styles/AboutUs.css`                    |
| `AdminLogin.js`                  | `/admin`                              | Admin login page                            | `pages/AdminLogin.css`                  |
| `AdminDashboard.js`              | `/admin-dashboard`                    | Admin dashboard (protected)                 | `pages/AdminDashboard.css`              |
| `services/ChronicCareManagement.js`| `/services/chronic-care-management`  | Chronic Care Management service page         | `styles/ServicePageLayout.css`          |
| `services/CaseManagement.js`     | `/services/case-management`           | Case Management service page                | `styles/ServicePageLayout.css`          |
| `services/BehavioralHealth.js`   | `/services/behavioral-health`         | Behavioral Health service page              | `styles/ServicePageLayout.css`          |
| `services/RemotePatientMonitoring.js`| `/services/remote-patient-monitoring`| Remote Patient Monitoring service page      | `styles/ServicePageLayout.css`          |
| `WhoWeHelp/Hospitals.js`         | `/who-we-help/hospitals`              | Hospitals info page                         | `pages/WhoWeHelp/hospital.css`          |
| `WhoWeHelp/PrivatePractices.js`  | `/who-we-help/private-practices`      | Private Practices info page                 | `pages/WhoWeHelp/privatepractices.css`  |
| `WhoWeHelp/Insurance.js`         | `/who-we-help/insurance-groups`       | Insurance Groups info page                  | `pages/WhoWeHelp/Insurance.css`         |
| `WhoWeHelp/ThirdPartyAdmin.js`   | `/who-we-help/third-party-administrator`| Third Party Admin info page                | `pages/WhoWeHelp/ThirdPartyAdmin.css`   |
| `WhoWeHelp/CaseManagementGroups.js`| `/who-we-help/case-management-groups`| Case Management Groups info page            | `pages/WhoWeHelp/CaseManagementGroups.css`|

**How to update a page’s style:**
Find the page in `src/pages/` and its CSS in the same folder or in `src/styles/`.

---

### 3. Styles (`src/styles/` and `src/pages/**.css`)
- **Global and section styles** are in `src/styles/`.
- **Page-specific styles** are in the same folder as the page (e.g., `AdminLogin.css` for `AdminLogin.js`).

---

## 🗺️ How Everything Connects

- **App.js**: Main router, imports all pages and shared components (NavBar, Footer).
- **Each page**: Uses components for layout and content.
- **Each component**: Has its own CSS for styling.
- **ContactSection**: Handles form submission, posts to backend, uses `ContactSection.css` for styles.
- **AdminLogin/AdminDashboard**: Handles admin authentication and dashboard, uses their own CSS files.
- **AdminProtectedRoute**: Checks for `admin-auth` in localStorage to protect admin routes.

---

## 📝 If You Want to Update or Add:

- **A new section to a page:**  
  1. Create a new component in `src/components/`.
  2. Add a CSS file in `src/styles/` (or reuse an existing one).
  3. Import and use the component in the relevant page in `src/pages/`.

- **A new page:**  
  1. Create a new file in `src/pages/`.
  2. Add a route in `src/App.js`.
  3. Add a CSS file in the same folder or in `src/styles/`.

- **Change backend API endpoints:**  
  1. Update the URL in the relevant component/page (usually in an Axios call).
  2. Update CORS in `Server/Index.js` if needed.

- **Change frontend URL (for CORS):**  
  1. Update the `origin` in the backend’s CORS config.

---

## 🧭 Quick Reference Table

| What you want to do                | Where to look/edit                                 |
|-------------------------------------|----------------------------------------------------|
| Change contact form backend URL     | `src/components/ContactSection.js` (Axios call)    |
| Change admin login credentials      | `src/pages/AdminLogin.js`                          |
| Change admin dashboard API URL      | `src/pages/AdminDashboard.js` (Axios call)         |
| Change styles for a section         | `src/styles/SectionName.css` or page CSS           |
| Add a new page                      | `src/pages/`, update `src/App.js`                  |
| Add a new component                 | `src/components/`, add style in `src/styles/`      |
| Change backend CORS                 | `Server/Index.js`                                  |
| Change database connection          | `Server/.env`                                      |

---

If you need a more detailed mapping for a specific component or page, let me know!
