import { useEffect } from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { 
  faClipboardList, 
  faProjectDiagram, 
  faHospitalUser, 
  faChartLine, 
  faHandsHelping 
} from '@fortawesome/free-solid-svg-icons';

import CMImage from './images/Case-Background-2.jpg';
import guidanceImg from './images/case-image1.jpg';
import holisticImg from './images/HolisticView.jpg';
import integrationImg from './images/howitworkscasemanagement.jpg';

const pageData = {
  heroImage: CMImage,
  hero: {
    headline: 'Case Management',
    subheading: 'Coordinated care pathways guiding high-risk patients through every step—from hospitalization to home—so you can close care gaps, reduce readmissions, and deliver truly personalized support.',
  },
  sections: [
    {
      image: guidanceImg,
      title: 'Guidance Every Step of the Way',
      text: 'Our case managers are dedicated to providing personalized, one-on-one support to your most complex patients. From coordinating appointments and transportation to navigating insurance and community resources, we are there to guide patients and their families through every step of their healthcare journey.'
    },
    {
      image: holisticImg,
      title: 'A Holistic View of Patient Health',
      text: 'We work closely with your care team to develop a comprehensive, holistic view of each patient\'s health. By breaking down silos and fostering collaboration, we ensure that everyone is on the same page, working together to achieve the best possible outcomes for your patients.'
    }
  ],
  intro: 'Our Case Management service assigns each complex patient a dedicated clinical manager who becomes their single point of contact. From deep-dive intake assessments to real-time coordination with specialists and community resources, we handle the logistics so your providers can focus on delivering care. Reduce unnecessary utilization, improve patient satisfaction, and keep every stakeholder aligned on one dynamic care plan.',
  features: [
    {
      icon: faClipboardList,
      title: 'Personalized Care Plans',
      description: 'Tailor dynamic care pathways based on each patient’s medical history, social needs, and personal goals. Plans update in real time as conditions change.',
    },
    {
      icon: faProjectDiagram,
      title: 'Multi-Disciplinary Coordination',
      description: 'Our case managers liaise seamlessly between primary care, specialists, therapists, and social services—ensuring that every referral, appointment, and note lives in one unified dashboard.',
    },
    {
      icon: faHospitalUser,
      title: 'Transition-of-Care Support',
      description: 'Smooth hospital-to-home handoffs with medication reconciliation, home-visit scheduling, and automated follow-up calls that prevent gaps in post-discharge care.',
    },
    {
      icon: faChartLine,
      title: 'Risk Stratification & Predictive Analytics',
      description: 'Leverage data-driven algorithms to identify patients at highest risk for complications—so you can proactively intervene before crises occur.',
    },
    {
      icon: faHandsHelping,
      title: 'Resource Navigation',
      description: 'Expert assistance connecting patients to transportation, financial aid, home-health services, behavioral health resources, and more—reducing non-clinical barriers to compliance.',
    },
  ],
  benefits: [
    {
      title: 'Reduced Readmissions',
      description: 'Proactive transition planning and early issue escalation drive a 30–50% drop in hospital readmissions among enrolled patients.',
    },
    {
      title: 'Improved Patient Satisfaction',
      description: 'Patients feel guided and supported throughout complex care journeys, leading to higher survey scores and stronger word-of-mouth referrals.',
    },
    {
      title: 'Cost Containment',
      description: 'Streamlined coordination and barrier resolution keep patients on the right care path—averting unnecessary ER visits and duplicative tests.',
    },
    {
      title: 'Enhanced Team Collaboration',
      description: 'One-view care plans and shared workflows align providers, nurses, social workers, and external partners on the same page.',
    },
    {
      title: 'Regulatory & Quality Compliance',
      description: 'Thorough documentation supports HEDIS measures, CMS Star Ratings, and audit readiness—helping you meet both clinical and financial benchmarks.',
    },
  ],
  howItWorksImage: integrationImg,
  howItWorks: [
    {
      title: 'Intake Assessment',
      description: 'A clinical case manager conducts a comprehensive interview—capturing medical history, medications, social determinants, and patient goals.',
    },
    {
      title: 'Care Plan Development',
      description: 'Together, your team and our clinical leads draft a customized, milestone-driven plan outlining interventions, follow-up frequency, and outcome measures.',
    },
    {
      title: 'Active Coordination & Monitoring',
      description: 'Case managers schedule and track every appointment, home visit, and telehealth session—updating the plan instantly as tasks complete or new needs emerge.',
    },
    {
      title: 'Barrier Resolution',
      description: 'Non-clinical challenges (transportation, housing, financial assistance) are handled by our resource specialists, ensuring patients can adhere to their clinical plan.',
    },
    {
      title: 'Ongoing Review & Optimization',
      description: 'Weekly multidisciplinary huddles and monthly performance reports enable continuous adjustment of the care plan to drive the best outcomes.',
    },
  ],
  faq: [
    {
      question: 'Which patients benefit most from Case Management?',
      answer: 'Individuals with multiple comorbidities—such as heart failure, COPD, or complex post-operative care—see the greatest impact, but we tailor programs to any high-risk population.',
    },
    {
      question: 'How quickly can we enroll patients?',
      answer: 'After we connect to your EHR and complete staff training, most practices begin enrolling within 7–10 days.',
    },
    {
      question: 'What level of involvement is required from our team?',
      answer: 'We handle the bulk of outreach and coordination; your providers intervene only on escalated clinical issues and plan approvals.',
    },
  ],
  cta: {
    headline: 'Ready to streamline care transitions and improve outcomes?',
    buttonText: 'Request a Consultation',
    contact: '(800) 123-4567 / cases@yourdomain.com',
  },
};

const CaseManagement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return <ServicePageLayout pageData={pageData} />;
};

export default CaseManagement;
