import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageHero from "../pages/PageHero";    

import "./SalesManagement.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SalesManagement = () => {
  return (
    <main className="sales-page">

       
      <PageHero
        title="Sales Management Made Effortless"
        subtitle="Your complete sales journey in one smart platform. Organize, automate, and accelerate your entire sales process with Ease Margin — from leads to quotations, sales orders, challans, invoices, and credit/debit notes."
      />

       
      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>Why Manage Sales the Old Way?</h2>
          <p>
            Go Smart with Ease Margin! Say goodbye to scattered spreadsheets, missed follow-ups,
            and disconnected documents. With Ease Margin, every sales step is beautifully connected,
            fully visible, and easy to control.
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
          <h2>🔄 Sales Flow You Can Actually See and Control</h2>

          <ul className="workflow-grid">
            <li>📋 <strong>Sales Lead</strong> — Capture and qualify new opportunities.</li>
            <li>💬 <strong>Sales Quotation</strong> — Create professional quotes in minutes.</li>
            <li>📦 <strong>Sales Order</strong> — Convert approved quotes directly.</li>
            <li>🧾 <strong>Proforma Invoice</strong> — Send pre-invoice documents instantly.</li>
            <li>🚚 <strong>Challan / Delivery Note</strong> — Track goods dispatched.</li>
            <li>🧾 <strong>Sales Invoice</strong> — GST-compliant billing made easy.</li>
            <li>💰 <strong>Credit / Debit Note</strong> — Manage returns & adjustments.</li>
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
          <h2>📄 Multi-Format Sales Documents</h2>

          <h3 className="subheading">📂 Generate Documents in Multiple Formats</h3>
          <ul className="benefit-grid">
            <li>📄 PDF</li>
            <li>🖨️ Printable A4</li>
            <li>✉️ Email-ready attachments</li>
          </ul>

          <h3 className="subheading">📤 Seamless Sharing & Storage</h3>
          <ul className="benefit-grid">
            <li>📥 Download</li>
            <li>🖨️ Print directly</li>
            <li>📧 Email</li>
            <li>💬 WhatsApp</li>
          </ul>

          <h3 className="subheading">🧩 Customizable Templates</h3>
          <p>
            Add logo, terms, bank details, and choose from professional templates for every document.
          </p>

          <h3 className="subheading">📚 Smart Document Repository</h3>
          <p>
            Store all sales documents in an organized, searchable manner with powerful filters.
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
          <h2>📊 Your Sales at a Glance</h2>

          <ul className="benefit-grid">
            <li>📈 Visual sales pipelines</li>
            <li>📋 Document status widgets</li>
            <li>🔔 Pending action alerts</li>
            <li>👥 Customer-wise summaries</li>
            <li>🌐 Beautiful visual insights</li>
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
          <h2>⭐ Key Advantages of Ease Margin Sales Management</h2>

          <ul className="benefit-grid">
            <li>⚙️ Streamlined Workflow</li>
            <li>🕒 Real-Time Tracking</li>
            <li>📑 Multiple Document Formats</li>
            <li>🚀 Faster Decisions</li>
            <li>✅ GST Compliance</li>
            <li>🤖 Smart Automation</li>
            <li>🎨 Professional Templates</li>
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
          <h3 className="subheading">👥 Perfect For</h3>

          <ul className="mode-grid">
            <li>🏪 Trading Companies</li>
            <li>🏭 Manufacturers</li>
            <li>🚚 Distributors</li>
            <li>💼 SMEs digitizing their process</li>
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
          <h2>🚀 Experience Sales Like Never Before</h2>
          <p>
            Start using Ease Margin’s Smart Sales Management and transform your sales process into
            a connected, modern, and efficient system.
          </p>

          <Link to="/request-demo" className="btn btn-orange-outline">
            Contact Us for a Free Demo
          </Link>
        </div>
      </motion.section>

    </main>
  );
};

export default SalesManagement;
