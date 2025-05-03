import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

  export const contactMethodsData = [
    {
      icon: <FaPhone className="text-3xl text-blue-600" />,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "Sun-Fri: 9:00 AM - 6:00 PM",
      action: "Call Now"
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-600" />,
      title: "Email Us",
      details: "support@susankhya.com",
      description: "We reply within 24 hours",
      action: "Send Email"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-600" />,
      title: "Visit Us",
      details: "Sajha, Biratnagar",
      description: "Book an appointment first",
      action: "Get Directions"
    },
    {
      icon: <MdSupportAgent className="text-3xl text-blue-600" />,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant help from our team",
      action: "Start Chat"
    }
  ];