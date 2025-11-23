import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageHero from "./PageHero";    
import "./BillOfMaterials.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BillOfMaterials = () => {
  return (
    <main className="bill-page">

       
      <PageHero
        title="Bill of Materials (BOM)"
        subtitle="Build single-level and multi-level BOMs with clarity, real-time cost tracking, and complete control over your product structure."
      />
 
      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>📊 Why Ease Margin’s BOM Stands Out</h2>
          <ul className="benefit-grid">
            <li>🌳 Build Single & Multi-Level BOMs with Visual Clarity</li>
            <li>💰 Track Raw Material, Process, and Overhead Costs in Real Time</li>
            <li>⚙️ Dynamically Adjust Costs as Prices Change</li>
            <li>📈 Estimate Manufacturing Costs & Profit Margins Accurately</li>
            <li>🧾 Streamline Procurement and Production Planning</li>
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
          <h2>🌐 Why Multi-Level BOM Matters</h2>
          <ul className="benefit-grid">
            <li>🔹 Break down complex assemblies step by step</li>
            <li>🔹 Track costs at every production stage</li>
            <li>🔹 Manage changes across all components easily</li>
            <li>🔹 Improve version control and product traceability</li>
          </ul>
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
          <h2>🚀 Build Smarter. Plan Faster. Grow Stronger.</h2>
          <p>
            Visualize product structures, track material usage, and control costs with Ease Margin’s powerful BOM engine.
          </p>
          <Link to="/request-demo" className="btn btn-orange-outline">
            Contact Us for a Free Demo
          </Link>
        </div>
      </motion.section>

    </main>
  );
};

export default BillOfMaterials;
