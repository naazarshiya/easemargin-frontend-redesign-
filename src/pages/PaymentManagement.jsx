import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageHero from "./PageHero";    
import "./PaymentManagement.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PaymentManagement = () => {
  return (
    <main className="payment-page">

       
      <PageHero
        title="Smart Payment Management for Your Business"
        subtitle="Track receivables, payables, settlements, and outstanding balances with complete clarity and seamless control."
      />

       
      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>💼 Why Struggle with Manual Payment Tracking?</h2>
          <p>
            Go smart with Ease Margin!  
            No more chasing dues, missing receipts, or mismatched entries.  
            Your entire payment process becomes clear, structured, and fully traceable.
          </p>

          <h3 className="subheading">🔁 Visualize and Control Every Payment Step</h3>
          <ul className="benefit-grid">
            <li>💰 Customer Payment Recording</li>
            <li>🧾 Handle Partial / Full Payments</li>
            <li>📊 Outstanding Receivables Summary</li>
            <li>🏦 Supplier Payment Tracking</li>
            <li>📉 Outstanding Payables Management</li>
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
          <h2>🗂️ Multi-Format Payment Records</h2>
          <p>Your payment records, your way.</p>

          <h3 className="subheading">📝 Supported Payment Modes</h3>
          <ul className="mode-grid">
            <li>💵 Cash</li>
            <li>🧾 Cheque</li>
            <li>🏦 Bank Transfer</li>
            <li>📲 UPI (manual entry)</li>
          </ul>

          <h3 className="subheading">☁️ Sharing & Storage</h3>
          <ul className="benefit-grid">
            <li>📥 Download Records</li>
            <li>🖨️ Print Summaries</li>
            <li>📧 Email Sharing</li>
            <li>💬 WhatsApp Sharing</li>
          </ul>

          <h3 className="subheading">🧾 Customizable Payment Vouchers</h3>
          <p>
            Add your company logo, notes, and terms to create clean, professional vouchers.
          </p>

          <h3 className="subheading">📁 Payment Repository</h3>
          <p>
            Search and filter by customer, supplier, date, payment mode, or document type.
          </p>
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
          <h2>📊 Real-Time Payment Dashboard</h2>
          <ul className="benefit-grid">
            <li>👥 Customer Receivables Overview</li>
            <li>🏭 Supplier Payables Overview</li>
            <li>⏰ Pending Payment Alerts</li>
            <li>💵 Advance & Overdue Summaries</li>
            <li>🔔 Smart Due Notifications</li>
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
          <h2>✨ Additional Smart Features</h2>
          <ul className="benefit-grid">
            <li>🔗 Auto-linked payments with Sales & Purchase</li>
            <li>📦 Bulk Payments Recording</li>
            <li>🚫 Smart Alerts for Pending Invoices</li>
            <li>⏰ Mode-wise & Account-wise Reports</li>
            <li>✅ Approval Workflow for Payment Processing</li>
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
          <h2>🚀 Start Using Smart Payment Management Today</h2>
          <p>
            Transform your entire payment tracking into a smooth, transparent, and well-controlled system.
          </p>
          <Link to="/request-demo" className="btn btn-orange-outline">
            Contact Us for a Free Demo
          </Link>
        </div>
      </motion.section>

    </main>
  );
};

export default PaymentManagement;
