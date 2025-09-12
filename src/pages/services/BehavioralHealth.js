import { useEffect } from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { 
  faUserFriends, 
  faVideo, 
  faClipboardCheck, 
  faBrain, 
  faHandshake 
} from '@fortawesome/free-solid-svg-icons';

import integratedCareImg from './images/integratedCare.jpg';
import approachImg from './images/Behavioural-Image2.jpg';
import howItWorksBHImage from './images/howitworksbh.jpg';


const pageData = {
  heroImage: '/images/behavioral.jpg',
  hero: {
    headline: 'Behavioral Health',
    subheading: 'Seamlessly embed mental health screening, therapy coordination, and ongoing support into your primary care workflow—so patients receive whole‑person care without extra referrals or handoffs.',
  },
  sections: [
    {
      image: integratedCareImg,
      title: 'Integrated Care for Body and Mind',
      text: 'We believe that mental health is just as important as physical health. Our integrated behavioral health model brings mental health professionals into your primary care practice, making it easier than ever for patients to get the care they need in a setting they know and trust.'
    },
    {
      image: approachImg,
      title: 'A Team-Based Approach to Wellness',
      text: 'Our collaborative care team works together to provide comprehensive, whole-person care. By combining the expertise of primary care providers, therapists, and psychiatrists, we can address the full spectrum of a patient\'s needs, from managing chronic conditions to treating mental health concerns.'
    }
  ],
  intro: 'Our integrated model brings licensed therapists, digital self‑management tools, and psychiatry consults directly into your practice. By uniting behavioral health specialists with your primary care team, we catch issues early, normalize mental health conversations, and close care gaps. Enhance patient well‑being, boost adherence, and unlock new revenue streams—all through one cohesive platform.',
  features: [
    {
      icon: faUserFriends,
      title: 'Collaborative Care Team',
      description: 'A multidisciplinary group—including primary care providers, care managers, therapists, and psychiatrists—shares one unified treatment plan and communicates in real time.',
    },
    {
      icon: faVideo,
      title: 'On‑Site & Telehealth Therapy',
      description: 'Offer both in‑office and secure video‑based counseling sessions for individual and group therapy, ensuring accessibility and convenience for every patient.',
    },
    {
      icon: faClipboardCheck,
      title: 'Measurement‑Based Care',
      description: 'Routine administration of validated scales (PHQ‑9, GAD‑7, etc.) with automated alerts for score changes that trigger timely interventions.',
    },
    {
      icon: faBrain,
      title: 'Digital Self‑Management Tools',
      description: 'Interactive CBT modules, mindfulness exercises, and mood‑tracking journals empower patients to take an active role in their mental health between visits.',
    },
    {
      icon: faHandshake,
      title: 'Warm‑Hand‑Off Protocols',
      description: 'Instant referrals and hand‑offs via in‑EHR triggers—no paper forms or phone calls—so patients never slip through the cracks when specialist care is needed.',
    },
  ],
  benefits: [
    {
      title: 'Improved Clinical Outcomes',
      description: 'Practices integrating behavioral health see up to a 30% increase in treatment adherence and faster symptom relief.',
    },
    {
      title: 'Reduced Stigma & Barriers',
      description: 'Embedding mental health in primary care normalizes seeking support, leading to higher patient engagement and lower no‑show rates.',
    },
    {
      title: 'Enhanced Revenue Opportunities',
      description: 'Leverage CPT codes for Collaborative Care Model (99492–99494), psychotherapy, and telehealth—adding a new, sustainable revenue stream.',
    },
    {
      title: 'Streamlined Workflows',
      description: 'Shared care plans and automated documentation mean your team spends less time on administrative tasks and more on patient care.',
    },
    {
      title: 'Data‑Driven Insights',
      description: 'Dashboards track patient progress, utilization metrics, and financial performance—helping you refine your behavioral health services over time.',
    },
  ],
  howItWorksImage: howItWorksBHImage,
  howItWorks: [
    {
      title: 'Routine Screening',
      description: 'Integrate behavioral health questionnaires into every well‑visit or chronic care appointment; high scores trigger immediate referrals.',
    },
    {
      title: 'Dedicated Care Manager Assignment',
      description: 'A licensed care manager conducts an initial assessment, sets goals, and schedules therapy or psychiatry sessions as needed.',
    },
    {
      title: 'Collaborative Treatment Planning',
      description: 'Weekly team huddles bring together your PCPs, therapists, and psychiatrists to review high‑risk cases and adjust care plans.',
    },
    {
      title: 'Ongoing Patient Engagement',
      description: 'Between visits, patients receive automated check‑ins, self‑help resources, and appointment reminders via our portal or mobile app.',
    },
    {
      title: 'Outcome Measurement & Reporting',
      description: 'Monthly reports summarize changes in PHQ‑9/GAD‑7 scores, session attendance, and care plan milestones—providing clear ROI metrics.',
    },
  ],
  faq: [
    {
      question: 'Who qualifies for integrated behavioral health?',
      answer: 'Any patient receiving care in your practice can be screened; those with mild to moderate symptoms benefit most, though our model scales to severe cases with psychiatrist involvement.',
    },
    {
      question: 'How do you protect patient privacy?',
      answer: 'All communications and data exchanges use HIPAA‑compliant encryption. Behavioral health notes are integrated into the EHR with role‑based access controls.',
    },
    {
      question: 'What training is required for our staff?',
      answer: 'We provide on‑site or virtual training for care managers and providers, covering workflows, screening tools, and the collaborative care model—typically completed in one half‑day session.',
    },
  ],
  cta: {
    headline: 'Ready to integrate behavioral health into your practice and elevate patient care?',
    buttonText: 'Start the Conversation',
    contact: '(800) 123‑4567 | behavioral@yourdomain.com',
  },
};

const BehavioralHealth = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return <ServicePageLayout pageData={pageData} />;
};
export default BehavioralHealth;
