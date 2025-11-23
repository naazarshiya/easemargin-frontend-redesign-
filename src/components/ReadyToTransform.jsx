import React, { useState } from "react";
import "./ReadyToTransform.css";

import dpiitLogo from "../assets/dpiit.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadyToTransform = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.warn("Please enter your email!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });

      const input = document.querySelector(".email-input");
      input.classList.add("shake");
      setTimeout(() => input.classList.remove("shake"), 600);
    } else {
      toast.success(`Thank you for subscribing, ${email}!`, {
        position: "top-center",
        autoClose: 2500,
        theme: "colored",
      });
      setEmail("");
    }
  };

  return (
    <section className="transform-section">

      {/* PARTICLE BACKGROUND */}
      <div className="particle-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      <div className="transform-container">

        {/* MAIN CARD */}
        <div className="glass-card transform-box fade-in tilt-card">
          <h2>Ready To Transform Your Business?</h2>
          <p>
            Discover how Ease Margin is helping companies simplify operations and grow smarter.
          </p>

          <div className="subscribe-box">
            <input
              type="email"
              className="email-input"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleSubscribe} className="liquid-btn">
              Subscribe
            </button>
          </div>
        </div>

        {/* DPIIT CARD */}
        <div className="glass-card dpiit-card fade-in delay-1 tilt-card">
          <span className="tag floating-badge">Recognised Startup — DPIIT</span>

          <h3>
            Proudly recognised under <strong>Startup India</strong> by <strong>DPIIT</strong>
          </h3>

          <p>
            Affirming our commitment to simplifying operations for growing businesses.
          </p>

          <img src={dpiitLogo} alt="DPIIT Startup India" className="dpiit-logo" />

          <p className="register-text">Registered with DPIIT — Startup India</p>
        </div>

        <ToastContainer />
      </div>

    </section>
  );
};

export default ReadyToTransform;
