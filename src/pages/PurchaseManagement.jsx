import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageHero from "./PageHero";   

import "./PurchaseManagement.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PurchaseManagement = () => {
  return (
    <main className="purchase-page">

      
      <PageHero
        title="Purchase Management Made Smart"
        subtitle="Seamlessly manage your entire procurement process with Ease Margin — from purchase requests to GRNs, quality checks, invoices, and supplier adjustments. Everything connected and easy to track."
      />

       
      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>💼 Why Purchase the Old Way?</h2>
          <p>
            Go Smart with Ease Margin! Say goodbye to inefficient emails, disconnected spreadsheets,
            and approval delays. With Ease Margin, every procurement step is linked, traceable,
            and fully under your control.
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
          <h2>🔁 Visualize and Control Every Purchase Step</h2>

          <ul className="workflow-grid">
            <li>🧾 <strong>Purchase Request</strong> — Initiate material or service requests.</li>
            <li>📜 <strong>Purchase Order</strong> — Issue official orders to suppliers.</li>
            <li>📦 <strong>GRN (Goods Received Note)</strong> — Track materials received.</li>
            <li>🧾 <strong>Proforma Invoice</strong> — Pre-invoice details.</li>
            <li>🧪 <strong>Quality Report</strong> — Accept or reject materials.</li>
            <li>💰 <strong>Purchase Invoice</strong> — Linked with GRN & PO.</li>
            <li>📉 <strong>Credit/Debit Note</strong> — Manage supplier returns.</li>
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
          <h2>🗂️ Multi-Format Purchase Documents</h2>

          <h3 className="subheading">📝 Generate in Multiple Formats</h3>
          <ul className="benefit-grid">
            <li>📄 PDF</li>
            <li>🖨️ Printable A4</li>
            <li>✉️ Email-ready files</li>
          </ul>

          <h3 className="subheading">☁️ Share & Store Easily</h3>
          <ul className="benefit-grid">
            <li>📥 Download</li>
            <li>🖨️ Print</li>
            <li>📧 Email</li>
            <li>💬 WhatsApp</li>
          </ul>

          <h3 className="subheading">🧾 Custom Templates</h3>
          <p>Add your logo, company details, bank info, and T&C.</p>

          <h3 className="subheading">📁 Smart Document Storage</h3>
          <p>Filter by supplier, date, status, or type whenever needed.</p>
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
          <h2>📈 See Purchase Status in Real-Time</h2>

          <ul className="benefit-grid">
            <li>📊 Procurement pipelines</li>
            <li>🔔 Pending approvals</li>
            <li>👥 Supplier-wise data</li>
            <li>⚙️ Alerts for pending items</li>
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
          <h2>✨ Additional Smart Features</h2>

          <ul className="benefit-grid">
            <li>🔗 Linked documents</li>
            <li>📦 Pending material tracking</li>
            <li>🚫 Rejection handling</li>
            <li>⏰ Auto reminders</li>
            <li>✅ Approvals workflow</li>
            <li>📊 Vendor performance tracking</li>
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
          <h2>⚙️ Why Choose Ease Margin for Purchase?</h2>

          <ul className="benefit-grid">
            <li>🔁 Seamless workflow</li>
            <li>📦 Real-time visibility</li>
            <li>📄 Multiple formats</li>
            <li>🔗 Auto-linking</li>
            <li>🧪 Quality tracking</li>
            <li>💰 Accurate records</li>
            <li>🎨 Professional templates</li>
          </ul>

          <h3 className="subheading">🏢 Perfect For</h3>
          <ul className="mode-grid">
            <li>🏭 Manufacturers</li>
            <li>🏪 Traders</li>
            <li>🚚 Distributors</li>
            <li>💼 SMEs</li>
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
          <h2>🚀 Start Using Smart Purchase Management Today</h2>
          <p>Upgrade your procurement process with Ease Margin.</p>

          <Link to="/request-demo" className="btn btn-orange-outline">
            Contact Us for a Free Demo
          </Link>
        </div>
      </motion.section>

    </main>
  );
};

export default PurchaseManagement;
