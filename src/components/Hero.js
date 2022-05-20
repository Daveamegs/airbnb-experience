import React from "react";
import Grid_Photo from "../images/photo-grid.png";

function Hero() {
  return (
    <main className="container">
      <section className="hero">
        <img src={Grid_Photo} alt="hero-grid" className="grid-photo" />
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </main>
  );
}

export default Hero;
