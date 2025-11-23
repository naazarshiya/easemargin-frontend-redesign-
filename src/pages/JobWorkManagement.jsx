import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageHero from "./PageHero";   
import "./JobWorkManagement.css";

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

const JobWorkManagement = () => {
  return (
    <main className="jobwork-page">

       
      <PageHero
        title="Job Work Management with Ease Margin"
        subtitle="Managing job work shouldn’t be complicated. From issuing service orders to tracking material movement, receiving finished goods, and reconciling invoices — Ease Margin brings everything into one powerful SaaS platform."
      />

       

      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="container">
          <h2>🧠 How Ease Margin Simplifies Job Work</h2>

          <ul className="benefit-grid">
            <li>
              <h3>📦 Send Materials with Challan</h3>
              <p>
                Easily issue Challans to send raw materials or semi-finished goods. 
                Every movement is logged with complete traceability.
              </p>
              <em>🔗 Works seamlessly with Inventory Management.</em>
            </li>

            <li>
              <h3>🧾 Create Service Orders</h3>
              <p>
                Generate professional service order documents instantly with clear 
                instructions and expectations.
              </p>
            </li>

            <li>
              <h3>📥 Record Goods Received Notes (GRN)</h3>
              <p>
                Confirm returned finished goods with GRNs linked to service orders 
                and challans for full accuracy.
              </p>
              <em>📦 Integrates with Purchase Management.</em>
            </li>

            <li>
              <h3>🔍 Quality Checks Made Simple</h3>
              <p>
                Record quality test results easily and maintain supplier performance 
                metrics effortlessly.
              </p>
            </li>

            <li>
              <h3>💰 Manage Vendor Invoices</h3>
              <p>
                Match invoices with service orders, challans, GRNs, and quality 
                checks — ensuring perfect reconciliation.
              </p>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="section why-choose"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>💡 Why Choose Ease Margin for Job Work Management?</h2>
          <ul className="benefit-grid">
            <li>⚙️ End-to-End Control — Everything connected.</li>
            <li>🔗 Complete Material Traceability — Challans + GRNs.</li>
            <li>✅ Built-in Quality Documentation.</li>
            <li>📊 Accurate Reconciliation.</li>
            <li>⏱️ Time-Saving Automation.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>🌟 The Ease Margin Advantage</h2>
          <p>
            Job work becomes transparent, reliable, and stress-free. You stay in 
            control at every stage with complete system-driven visibility.
          </p>
          <p>
            Integrates seamlessly with <strong>Production Management</strong> and{" "}
            <strong>Inventory Management</strong>.
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
          <h2>🚀 Ready to streamline your job work process?</h2>
          <p>Ensure accuracy, traceability, and fast reconciliation.</p>
          <Link to="/request-demo" className="btn btn-orange-outline">
            Request a Demo
          </Link>
        </div>
      </motion.section>

    </main>
  );
};

export default JobWorkManagement;
