import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>

      {/* HERO / BANNER */}
   <section className="hero-editorial">
  <div className="hero-container">
    
    {/* LEFT SIDE: TEXT */}
    <div className="hero-text">
      <h1>Welcome to EverStyle Home</h1>
      <p>Quality textiles for every room — towels, rugs, bedding & more.</p>
      <Link to="/products/all" className="hero-btn">Shop All Products</Link>
    </div>

    {/* RIGHT SIDE: IMAGE */}
    <div className="hero-photo">
      <img src="/images/hero-banner.png" alt="Home textiles" />
    </div>

  </div>
</section>


      {/* FEATURED COLLECTIONS */}
      <section className="featured-collections container py-5">
        <h2 className="section-title">Featured Collections</h2>
        <div className="grid grid-3 gap-4">
          {/* Example card — replicate & map from data */}
          <Link to="/products/collections/towels-collection-1" className="collection-card">
            <img src="/images/towel-collection.png" alt="Towels Collection" />
            <div className="card-body">
              <h3> Towels Collection</h3>
            </div>
          </Link>
          <Link to="/products/collections/rugs-collection-1" className="collection-card">
            <img src="/images/rug-collection.png" alt="Rugs Collection" />
            <div className="card-body">
              <h3>Rugs Collection</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* SHOP BY SPACE */}
      <section className="space-categories container py-5">
        <h2 className="section-title">Shop by Space</h2>
        <div className="grid grid-4 gap-4">
          <Link to="/spaces/bathroom" className="space-card">
            <img src="/images/bathroom.png" alt="Bathroom" />
            <div className="card-body">
              <h4>Bathroom</h4>
            </div>
          </Link>
          <Link to="/spaces/bedroom" className="space-card">
            <img src="/images/bedroom.png" alt="Bedroom" />
            <div className="card-body">
              <h4>Bedroom</h4>
            </div>
          </Link>
          <Link to="/spaces/kitchen" className="space-card">
            <img src="/images/kitchen.png" alt="Kitchen & Dining" />
            <div className="card-body">
              <h4>Kitchen & Dining</h4>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
