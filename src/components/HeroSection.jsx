import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import "./HeroSection.css";
import heroImage from "../assets/hero-dashboard.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const vantaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const vantaEffect = FOG({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,

      highlightColor: 0xd8b4fe,
      midtoneColor: 0xa5b4fc,
      lowlightColor: 0xfbcfe8,
      baseColor: 0xfdfcff,

      blurFactor: 0.55,
      speed: 2.2,
      zoom: 0.85,
      scale: 1.0,
      scaleMobile: 1.1,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section className="hero-vanta" ref={vantaRef}>
      <div className="hero-overlay">

        <div className="hero-content">
          <h1>
            Automate Your Manufacturing Workflow <br />
            <span>and Maximize Your Margin with Ease</span>
          </h1>

          <p>
            Manage everything from inventory to production in one seamless,
            intelligent dashboard.
          </p>

          <button className="btn-primary" onClick={() => navigate("/request-demo")}>
            Request a Demo
          </button>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Ease Margin Dashboard" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
