import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (

<div>
          {/* PROMOTIONAL BANNERS / INFO SECTIONS */}
      <section className="promo-banner py-5 text-center">
        <h3>Wholesale & Closeout Textiles for Retailers & Wholesalers</h3>
        <p>Ship nationwide, export worldwide — flexible programs for every business size.</p>
        <Link to="/contact" className="btn btn-outline-dark">Get in Touch</Link>
      </section>

      {/* FOOTER (stub) */}
      <footer className="site-footer py-4 text-center">
        <p>&copy; {new Date().getFullYear()} EverStyle Home. All Rights Reserved.</p>
      </footer>
</div>
 );
}
