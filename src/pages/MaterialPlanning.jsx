import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageHero from "./PageHero";    
import "./MaterialPlanning.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const MaterialPlanning = () => {
  return (
    <main className="material-page">

       
      <PageHero
        title="Smarter Material Planning with Ease Margin"
        subtitle="Plan Confidently. Procure Smartly. Deliver On Time. With Ease Margin’s powerful MRP engine, you’ll never worry about missing materials or overstocking again."
      />

      

      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>🔩 Your Materials, Always in Sync with Your Production</h2>
          <p>
            Our intelligent planning engine helps you align material availability with 
            your unique production flow — whether it's order-based, schedule-driven, 
            or stock-prepared.
          </p>

          <h3 className="key-benefits">📊 Key Benefits at a Glance</h3>
          <ul className="benefit-grid">
            <li>⚙️ Smart material calculations based on real-time business needs</li>
            <li>🧾 Instant purchase request generation</li>
            <li>🔗 Seamless integration with inventory and production</li>
            <li>📦 Multi-level BOM support for complex manufacturing</li>
            <li>⏱️ Faster planning, reduced waste, and on-time deliveries</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>🧠 Flexible Planning, Just the Way You Need It</h2>
          <p>
            Every manufacturing process is unique. Ease Margin’s MRP adapts to yours — 
            whether you’re fulfilling custom orders or building for stock, our system 
            adjusts to your strategy and helps you stay ahead.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="cta-box">
          <h2>🚀 Want to see how it works?</h2>
          <p>Contact us to explore a free live demo of Ease Margin’s MRP system.</p>
          <Link to="/request-demo" className="btn btn-orange-outline">
            Contact Us for a Free Demo
          </Link>
        </div>
      </motion.section>

    </main>
  );
};

export default MaterialPlanning;
