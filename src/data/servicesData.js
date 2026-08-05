import {
  Activity,
  Baby,
  Bone,
  Brain,
  CalendarCheck,
  Clock3,
  Eye,
  HeartHandshake,
  HeartPulse,
  MessageCircleMore,
  Search,
  ShieldCheck,
  Smile,
  Stethoscope,
  UserRound,
} from "lucide-react";

/* ===========================
   Hero Section
=========================== */

export const heroData = {
  badge: "Find Healthcare Professionals",

  title: "Connect With Trusted",

  highlight: "Healthcare Experts",

  description:
    "Discover verified healthcare professionals, compare profiles and book appointments through one trusted platform.",

  primaryButton: "Browse Doctors",

  secondaryButton: "Become a Provider",
};

/* ===========================
   Healthcare Categories
=========================== */

export const healthcareCategories = [
  {
    id: 1,
    icon: Stethoscope,
    title: "General Physician",
    description:
      "Primary healthcare consultations for common illnesses and routine medical care.",
    providers: "120+ Doctors",
    available: true,
  },

  {
    id: 2,
    icon: HeartPulse,
    title: "Cardiologist",
    description:
      "Heart specialists for diagnosis, treatment and preventive cardiac care.",
    providers: "Coming Soon",
    available: false,
  },

  {
    id: 3,
    icon: Brain,
    title: "Neurologist",
    description:
      "Specialists for brain, spinal cord and nervous system disorders.",
    providers: "Coming Soon",
    available: false,
  },

  {
    id: 4,
    icon: Baby,
    title: "Pediatrician",
    description:
      "Healthcare services dedicated to infants, children and adolescents.",
    providers: "Coming Soon",
    available: false,
  },

  {
    id: 5,
    icon: Eye,
    title: "Ophthalmologist",
    description:
      "Professional eye care, diagnosis and vision treatment services.",
    providers: "Coming Soon",
    available: false,
  },

  {
    id: 6,
    icon: Bone,
    title: "Orthopedic",
    description:
      "Bone, joint and musculoskeletal treatment from experienced specialists.",
    providers: "Coming Soon",
    available: false,
  },

  {
    id: 7,
    icon: Smile,
    title: "Dentist",
    description:
      "Comprehensive dental care including consultation and oral treatment.",
    providers: "Coming Soon",
    available: false,
  },

  {
    id: 8,
    icon: Activity,
    title: "Dermatologist",
    description:
      "Skin, hair and nail care from qualified dermatology specialists.",
    providers: "Coming Soon",
    available: false,
  },
];

/* ===========================
   Why Choose OneConnect
=========================== */



export const whyChooseData = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Verified Doctors",
    description:
      "Every healthcare professional is verified to ensure quality, trust and patient safety.",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Easy Appointment Booking",
    description:
      "Book consultations quickly with a simple and user-friendly appointment process.",
  },
  {
    id: 3,
    icon: Clock3,
    title: "Save Time",
    description:
      "Find the right healthcare provider without spending hours searching multiple platforms.",
  },
  {
    id: 4,
    icon: HeartHandshake,
    title: "Trusted Experience",
    description:
      "We focus on creating a secure and reliable healthcare experience for every patient.",
  },
];

/* ===========================
   How It Works
=========================== */


export const howItWorksData = [
  {
    id: 1,
    icon: Search,
    title: "Search Doctor",
    description:
      "Browse verified healthcare professionals based on specialty and availability.",
  },
  {
    id: 2,
    icon: UserRound,
    title: "View Profile",
    description:
      "Review doctor profiles, experience, qualifications and expertise before booking.",
  },
  {
    id: 3,
    icon: CalendarCheck,
    title: "Book Appointment",
    description:
      "Schedule your appointment through a quick and simple booking process.",
  },
  {
    id: 4,
    icon: MessageCircleMore,
    title: "Get Consultation",
    description:
      "Meet your selected healthcare professional with confidence.",
  },
];


/* ===========================
   CTA
=========================== */

export const ctaData = {
  title: "Ready to Find the Right Healthcare Professional?",

  description:
    "Connect with trusted doctors through OneConnect. Whether you're looking for medical advice or planning your next appointment, we're here to make healthcare more accessible.",

  primaryButton: {
  text: "Browse Doctors",
  href: "/doctors",
},

  secondaryButton: {
    text: "Become a Provider",
    href: "/register/provider",
  },
};