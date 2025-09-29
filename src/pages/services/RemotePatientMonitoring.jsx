import { useEffect } from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { 
  faPhoneAlt, 
  faTabletAlt, 
  faFileInvoiceDollar, 
  faMobileAlt, 
  faBell 
} from '@fortawesome/free-solid-svg-icons';
import RPMImage2 from './images/RPM-Background-2.jpg';
import rpmImg from './images/RPM-image-1.jpg';
import realTimeDataImg from './images/realTimeData.jpg';
import rpmAtHomeImg from './images/rpmathome.jpg';

const pageData = {
  heroImage: RPMImage2,
  hero: {
    headline: 'Remote Patient Monitoring (RPM)',
    subheading: 'Continuous, connected care that empowers patients and providers—so issues are caught early, interventions happen faster, and healthier outcomes become the norm.',
  },
  sections: [
    {
      image: rpmImg,
      title: 'Connected Care, Right at Home',
      text: 'Our RPM solutions empower patients to take an active role in managing their health from the comfort of their own homes. With easy-to-use devices and a secure online portal, patients can track their vitals, communicate with their care team, and stay on top of their treatment plans.'
    },
    {
      image: realTimeDataImg,
      title: 'Real-Time Data, Real-World Impact',
      text: 'Our platform provides your care team with real-time access to patient data, enabling you to detect potential issues before they become serious. With customizable alerts and advanced analytics, you can deliver proactive, preventative care that improves outcomes and reduces costs.'
    }
  ],
  intro: 'Our RPM solution leverages scheduled outreach and simple digital tools to keep patients on track between visits. Through regular telephonic check-ins and a secure web portal, we collect vitals and symptom updates, surface only the critical alerts, and automate documentation—so your care team can focus on what matters most: your patients’ health.',
  features: [
    {
      icon: faPhoneAlt,
      title: 'Telephonic Check-Ins & Manual Data Entry',
      description: 'Care coordinators conduct scheduled phone calls to record patient-reported vitals (blood pressure, weight, glucose) and symptom updates, logging every entry directly into your system.',
    },
    {
      icon: faTabletAlt,
      title: 'Bring-Your-Own-Device Compatibility',
      description: 'Patients use their own monitoring devices at home; reading values are self-reported via our secure web portal or by phone—no special hardware required.',
    },
    {
      icon: faMobileAlt,
      title: 'Secure Patient Portal & Messaging',
      description: 'A lightweight, HIPAA-compliant web portal lets patients enter daily readings, view their trends, and message the care team via email or SMS for questions or clarifications.',
    },
    {
      icon: faBell,
      title: 'Customizable Alert Thresholds',
      description: 'Clinically defined parameters trigger real-time notifications for out-of-range readings or missed submissions. Alerts appear on a centralized dashboard, routed to the appropriate clinician.',
    },
    {
      icon: faFileInvoiceDollar,
      title: 'Automated Documentation & Billing',
      description: 'Each data submission, outreach call, and alert resolution is time-stamped and captured in billing-ready progress notes. At month’s end, RPM-compliant summaries are auto-generated for hassle-free claims.',
    },
  ],
  benefits: [
    {
      title: 'Proactive Clinical Intervention',
      description: 'Early detection of concerning trends—through call-based monitoring—reduces ER visits and hospital admissions.',
    },
    {
      title: 'High Patient Engagement',
      description: 'Personalized phone outreach combined with an easy-to-use portal consistently drives adherence, even without a dedicated mobile app.',
    },
    {
      title: 'Operational Efficiency',
      description: 'Automated triage filters out non-actionable data, so your care team spends less time reviewing readings and more time on truly high-risk cases.',
    },
    {
      title: 'Enhanced Revenue Streams',
      description: 'Capture all eligible RPM reimbursements with automated documentation—adding a reliable, recurring revenue line to your practice.',
    },
    {
      title: 'Scalable Care Model',
      description: 'Enroll hundreds (or thousands) of patients without proportional increases in headcount. Our flat-fee model scales with your program’s growth.',
    },
  ],
  howItWorksImage: rpmAtHomeImg
  
  ,
  howItWorks: [
    {
      title: 'Onboarding & Training',
      description: 'Introduce patients to the process via an initial call: show them how to report readings by phone or portal, and ensure they understand the schedule.',
    },
    {
      title: 'Regular Data Collection',
      description: 'Patients submit vitals and symptoms daily or weekly through scheduled telephonic check-ins or by entering them into the portal.',
    },
    {
      title: 'Alert Triage & Review',
      description: 'Custom thresholds generate instant alerts for missed submissions or abnormal readings. Care coordinators review and either resolve non-urgent items or escalate critical issues to providers.',
    },
    {
      title: 'Patient Coaching & Follow-Up',
      description: 'Through phone or secure messaging, coordinators offer tailored guidance, answer questions, and adjust monitoring plans in real time.',
    },
    {
      title: 'Monthly Close-Out & Reporting',
      description: 'At each 30-day interval, the system compiles all time-stamped interactions and readings into a CMS-compliant report. Review and submit with one click—no manual paperwork required.',
    },
  ],
  faq: [
    {
      question: 'Do patients need special hardware?',
      answer: 'No—patients can use their own blood pressure cuffs, scales, or glucometers, and report readings by phone or through our web portal.',
    },
    {
      question: 'How is patient data secured?',
      answer: 'All communications and data storage are HIPAA-compliant, with encrypted channels for messaging and portal access.',
    },
    {
      question: 'How quickly can we launch an RPM program?',
      answer: 'Most practices go live within 7-10 days. Our team handles onboarding, training, and workflow setup to minimize your IT burden.',
    },
  ],
  cta: {
    headline: 'Ready to transform remote care with our streamlined RPM approach?',
    buttonText: 'Book a Demo',
    contact: 'or call us at (800) 123-4567 | rpm@yourdomain.com',
  },
};

const RemotePatientMonitoring = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return <ServicePageLayout pageData={pageData} />;
};

export default RemotePatientMonitoring;
