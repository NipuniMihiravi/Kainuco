
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import "./Page.css"; // Ensure styles are applied

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+94710654246"  // Replace with your WhatsApp number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
