import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PageHero from "./PageHero";    
import "./ProductionManagement.css";

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

const ProductionManagement = () => {
  return (
    <main className="production-page">
 
      <PageHero
        title="Production Management with Ease Margin"
        subtitle="Transform the way you plan, track, and execute production with Ease Margin — a powerful SaaS solution built to streamline your manufacturing processes from raw material planning to finished goods testing."
      />

       
      <motion.section
        className="highlight-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="container">
          <h2>⚙️ Smarter, Automated Production Workflows</h2>

          <ul className="benefit-grid">
            <li>
              <h3>🧾 Auto-Generated Work Orders</h3>
              <p>
                Automatically generate work orders from sales orders — zero manual handovers.
                Keep Sales, Production, and Inventory perfectly in sync.
              </p>
            </li>

            <li>
              <h3>📦 Raw Material & Process Tracking</h3>
              <p>
                Track raw material consumption in real time with clear visibility into usage,
                wastage, and balance. Automated planning prevents shortages and delays.
              </p>
            </li>

            <li>
              <h3>📊 Production Progress & Monitoring</h3>
              <p>
                Track production at every stage, monitor WIP, identify bottlenecks early,
                and ensure on-time delivery.
              </p>
            </li>

            <li>
              <h3>🔍 Quality & Testing Built In</h3>
              <p>
                Log and manage finished goods quality checks before dispatch to ensure only
                approved items move to sales.
              </p>
            </li>

            <li>
              <h3>🏭 Flexible Production Types</h3>
              <p>
                Supports both Make-to-Order (MTO) and Make-to-Stock (MTS) production models.
              </p>
            </li>
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
          <h2>⚡ Machine Efficiency Tracking</h2>
          <p>
            Measure performance and utilization in real time. Identify inefficiencies,
            reduce downtime, and maximize throughput with actionable insights.
          </p>
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
          <h2>💡 Why Choose Ease Margin for Production Management?</h2>
          <ul className="benefit-grid">
            <li>☁️ Cloud-based SaaS — access anywhere</li>
            <li>🔗 Integrated with Sales, Purchase, Inventory & MRP</li>
            <li>⚙️ Supports MTO & MTS manufacturing</li>
            <li>📊 Real-time insights to reduce cost & improve delivery</li>
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
          <h2>🚀 Production becomes smarter, faster, and more reliable.</h2>
          <p>
            With Ease Margin, you can focus on growth while we handle the complexity.
            Transform your production operations today!
          </p>
          <Link to="/request-demo" className="btn btn-orange-outline">
            Request a Demo
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default ProductionManagement;
