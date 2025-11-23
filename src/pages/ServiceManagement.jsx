import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageHero from "./PageHero";   
import "./ServiceManagement.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceManagement = () => {
  return (
    <main className="service-page">

       
      <PageHero
        title="Smart Service Management for Modern Businesses"
        subtitle="Manage service workflows, material movements, document generation, and quality checks in one connected and efficient platform."
      />

       
      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>🤔 Why Manage Services the Old Way?</h2>
          <p>
            Go smart with Ease Margin! Eliminate manual tracking and document mismatches.
            Gain complete visibility from service initiation to final invoicing.
          </p>
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
          <h2>🛠️ End-to-End Service Workflow</h2>
          <ul className="workflow-grid">
            <li>📋 <strong>Service Order</strong> — Create and track service requests effortlessly.</li>
            <li>🚚 <strong>Service Challan</strong> — Manage material dispatch with traceability.</li>
            <li>📦 <strong>Goods Received Note (GRN)</strong> — Log serviced material returns.</li>
            <li>🧪 <strong>Quality Report</strong> — Maintain testing & inspection information.</li>
            <li>💰 <strong>Service Invoice</strong> — Link invoices to service orders & GRNs.</li>
            <li>🧾 <strong>Credit/Debit Note</strong> — Manage service-related adjustments.</li>
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
          <h2>🗂️ Multi-Format Service Documents</h2>

          <h3 className="subheading">📝 Generate in Multiple Formats</h3>
          <ul className="benefit-grid">
            <li>📄 PDF</li>
            <li>🖨️ Printable A4</li>
            <li>✉️ Email Attachments</li>
          </ul>

          <h3 className="subheading">☁️ Seamless Sharing & Storage</h3>
          <ul className="benefit-grid">
            <li>📥 Download</li>
            <li>🖨️ Print</li>
            <li>📧 Email</li>
            <li>💬 WhatsApp</li>
          </ul>

          <h3 className="subheading">🎨 Customizable Templates</h3>
          <p>
            Add your logo, service notes, and terms to create consistent, professional documents.
          </p>

          <h3 className="subheading">🗃️ Document Repository</h3>
          <p>
            Track all service records with search filters for provider, date, and status.
          </p>
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
          <h2>📈 Real-Time Dashboard</h2>
          <ul className="benefit-grid">
            <li>📊 Visualized Service Pipeline</li>
            <li>🔔 Alerts for Pending Actions</li>
            <li>👥 Supplier Performance Tracking</li>
            <li>⚙️ Notifications for Delays</li>
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
          <h2>🚀 Transform Your Service Operations Today</h2>
          <p>Switch to Ease Margin for a smart, automated service workflow.</p>
          <Link to="/request-demo" className="btn btn-orange-outline">
            Contact Us for a Free Demo
          </Link>
        </div>
      </motion.section>

    </main>
  );
};

export default ServiceManagement;
