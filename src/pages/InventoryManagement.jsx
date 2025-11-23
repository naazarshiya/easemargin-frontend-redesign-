import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "./PageHero";         
import "./InventoryManagement.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const InventoryManagement = () => {
  return (
    <main className="inventory-page">

       
      <PageHero
        title="Smart Inventory Management for Growing Businesses"
        subtitle="Automate stock tracking, manage orders, and optimize supply chain operations with AI-driven inventory control."
        buttonText="Request a Demo"
      />

       

      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container">
          <h2>📦 Monitor Stock Levels with Live Updates</h2>
          <p>
            Efficiently manage your inventory with real-time stock level tracking. Our system continuously updates stock availability across all locations, ensuring you have the latest data at your fingertips. 
            With live updates, you can quickly identify fast-moving products, prevent stock shortages, and optimize your inventory strategy.
          </p>
          <p>
            Get automated alerts when stock levels drop below predefined thresholds, helping you take timely action before running out of essential items.
            Additionally, our system prevents overstocking by providing insights into demand trends, allowing you to make informed purchasing decisions and improve cash flow.
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
          <h2>✨ Key Features of Ease Margin Inventory Management</h2>
          <ul className="feature-grid">
            <li>🏪 <strong>Manage Multiple Stores</strong> — Track inventory, sales, and valuation across all store locations.</li>
            <li>📊 <strong>Physical Stock Reconciliation</strong> — Maintain accurate records by comparing system and physical stock.</li>
            <li>⚙️ <strong>Custom Fields & Alternate Units</strong> — Tailor inventory tracking and manage units seamlessly.</li>
            <li>📜 <strong>Stock History Tracking</strong> — Get real-time item and store-level history for better control.</li>
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
          <h2>🏪 Manage Multiple Stores</h2>
          <p>
            Multiple store management allows businesses to track inventory, sales, and stock valuation across different locations.
            It ensures real-time updates, low-stock alerts, and negative stock restrictions per store for improved control.
          </p>
          <ul className="benefit-grid">
            <li>✅ Create multiple stores and manage stocks per store.</li>
            <li>🔔 Get alerts and notifications for low stocks.</li>
            <li>💰 View stock valuation per store.</li>
            <li>🚫 Restrict negative stocks per store.</li>
            <li>🔄 Real-time updates as per document creation.</li>
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
          <h2>📊 Physical Stock Reconciliation</h2>
          <p>
            Physical stock reconciliation ensures accurate inventory management by comparing system records with actual stock counts.
            This process identifies discrepancies due to errors, theft, or mismanagement — ensuring precise inventory levels and better decision-making.
          </p>
          <ul className="benefit-grid">
            <li>🔍 Update product stocks by verifying physical stock per store.</li>
            <li>🛠️ Manually adjust stock quantities as needed.</li>
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
          <h2>⚙️ Custom Fields and Alternate Units</h2>
          <p>
            Custom fields and alternate units make your inventory adaptable and efficient.
            Manage multiple measurement units (e.g., pieces to boxes) and store item-specific details to improve flexibility and accuracy.
          </p>
          <ul className="benefit-grid">
            <li>🧾 Create custom fields at item level and use them in documents.</li>
            <li>📦 Manage multiple units for a single item with real-time updates.</li>
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
          <h2>📜 Stock History</h2>
          <p>
            Stock history tracking provides complete visibility of inventory movements across all stores.
            Analyze trends, prevent shortages, and improve control with detailed logs of item transfers and adjustments.
          </p>
          <ul className="benefit-grid">
            <li>📈 Get real-time item-level history by store and unit.</li>
            <li>🏪 View store-level movement history for precise tracking.</li>
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
          <h2>🚀 Start Managing Your Inventory Efficiently Today!</h2>
          <p>Streamline your stock management process with real-time updates, alerts, and AI-powered efficiency.</p>
          <Link to="/request-demo" className="btn btn-orange-outline">Request a Demo</Link>
        </div>
      </motion.section>

    </main>
  );
};

export default InventoryManagement;
