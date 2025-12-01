import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="ark-topbar">
      <div className="ark-topbar-inner">
        <a href="tel:+18001234567" className="ark-topbar-link">
          <FaPhoneAlt className="ark-topbar-icon" />
          (800) 123-4567
        </a>

        <span className="ark-divider">|</span>

        <a href="mailto:info@everstylehome.com" className="ark-topbar-link">
          <FaEnvelope className="ark-topbar-icon" />
          info@everstylehome.com
        </a>

        <span className="ark-divider">|</span>

        <a
          href="https://wa.me/18001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="ark-topbar-link"
        >
          <FaWhatsapp className="ark-topbar-icon" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

