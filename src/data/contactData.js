import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  Headphones,
  Globe,
} from "lucide-react";

export const heroData = {
  badge: "Get in Touch",
  title: "Let's Build Something Amazing Together",
  description:
    "Whether you have a question, need support, or want to discuss your next project, our team is ready to help. Reach out and let's start the conversation.",

  primaryButton: {
    text: "Contact Our Team",
    href: "#contact-form",
  },

  secondaryButton: {
    text: "View Offices",
    href: "#office-locations",
  },
};

export const contactInfo = [
  {
    id: 1,
    title: "Email Us",
    value: "support@oneconnect.com",
    description: "We'll respond within 24 hours.",
    icon: Mail,
  },

  {
    id: 2,
    title: "Call Us",
    value: "+92 300 1234567",
    description: "Monday – Friday, 9:00 AM – 6:00 PM",
    icon: Phone,
  },

  {
    id: 3,
    title: "Visit Our Office",
    value: "Johar Town, Lahore",
    description: "Drop by for a coffee and discussion.",
    icon: MapPin,
  },

  {
    id: 4,
    title: "Working Hours",
    value: "Mon – Fri",
    description: "9:00 AM – 6:00 PM",
    icon: Clock,
  },
];

export const officeLocations = [
{
  id: 1,
  city: "Lahore",
  office: "Head Office",
  address: "427/428 G-IV Block, M.A. Johar Town, Lahore, Punjab 54000",
  phone: "+92 42 35315043",
  email: "info@nextbridge.com",
  icon: Building2,
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=427%2F428+G-IV+Block,+M.A.+Johar+Town,+Lahore",
},

  {
    id: 2,
    city: "Karachi",
    office: "Regional Office",
    address:
      "45 Tech Street, Clifton, Karachi, Pakistan",
    phone: "+92 301 7654321",
    email: "karachi@oneconnect.com",
    icon: Globe,
    mapLink:
  "https://www.google.com/maps/search/?api=1&query=45+Tech+Street,+Clifton,+Karachi,+Pakistan",
  },

  {
    id: 3,
    city: "Islamabad",
    office: "Support Center",
    address:
      "88 Innovation Road, Blue Area, Islamabad",
    phone: "+92 302 9876543",
    email: "islamabad@oneconnect.com",
    icon: Headphones,
    mapLink:
  "https://www.google.com/maps/search/?api=1&query=88+Innovation+Road,+Blue+Area,+Islamabad,+Pakistan",
  },
];

export const faqData = [
  {
    id: 1,
    question: "How quickly can I expect a response?",
    answer:
      "Our team usually responds to all inquiries within one business day.",
  },

  {
    id: 2,
    question: "Can I schedule a product demo?",
    answer:
      "Absolutely. Simply submit the contact form, and our team will arrange a suitable meeting time.",
  },

  {
    id: 3,
    question: "Do you provide enterprise solutions?",
    answer:
      "Yes. We offer scalable enterprise solutions tailored to organizations of all sizes.",
  },

  {
    id: 4,
    question: "Do you offer technical support?",
    answer:
      "Yes. Our support team is available during business hours to assist with technical issues and product guidance.",
  },
];

export const ctaData = {
  title: "Ready to Transform Your Business?",
  description:
    "Connect with our experts today and discover how OneConnect can help streamline your workflow and accelerate growth.",

  primaryButton: {
    text: "Contact Sales",
    href: "#contact-form",
  },

 secondaryButton: {
  text: "Book a Meeting",
  href: "#contact-form",
},
};

export const mapData = {
  title: "Find Us on the Map",

  description:
    "Visit our headquarters or use the map below to get directions quickly and easily.",

  locationName: "NextBridge Head Office",

  embedUrl:
    "https://maps.google.com/maps?q=427%2F428%20G-IV%20Block%2C%20M.A.%20Johar%20Town%2C%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed",
};