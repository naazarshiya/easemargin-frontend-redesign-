import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./WhyChooseSection.css";

const features = [
  {
    title: "Sales Management",
    desc: "Track leads, manage orders, and streamline your entire sales process from quote to invoice.",
    path: "/sales",
    color: "linear-gradient(135deg, #a0c4ff, #4a90e2)",
  },
  {
    title: "Purchase Management",
    desc: "Easily manage suppliers, purchase orders, and incoming stock to avoid delays.",
    path: "/purchase",
    color: "linear-gradient(135deg, #ffd6a5, #ffb347)",
  },
  {
    title: "Multi-Store Inventory",
    desc: "Monitor stock across all locations in real-time with batch, barcode, and FIFO tracking.",
    path: "/inventory",
    color: "linear-gradient(135deg, #b9fbc0, #5cb85c)",
  },
  {
    title: "Production Management",
    desc: "Plan, track, and control manufacturing with BOM, work orders, and quality checks.",
    path: "/production",
    color: "linear-gradient(135deg, #fcd5ce, #ff758f)",
  },
  {
    title: "Material Planning",
    desc: "Forecast material needs and ensure timely procurement to prevent stockouts.",
    path: "/material-planning",
    color: "linear-gradient(135deg, #cdb4db, #b388eb)",
  },
  {
    title: "Job Work Management",
    desc: "Manage outsourced manufacturing with clear tracking of material flow and timelines.",
    path: "/jobwork",
    color: "linear-gradient(135deg, #a0e7e5, #00b4d8)",
  },
];

const WhyChooseSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const cardWidth = current.querySelector(".feature-card").offsetWidth + 24; // includes gap
    if (direction === "left") current.scrollLeft -= cardWidth;
    else current.scrollLeft += cardWidth;
  };

  return (
    <section className="why-choose-section">
      <motion.h2
        className="why-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose <strong>Ease Margin</strong>?
      </motion.h2>

      <motion.p
        className="why-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Ease Margin is built to help businesses optimize operations, reduce manual tasks,
        and drive profitability with seamless automation and real-time insights.
      </motion.p>

      <div className="slider-container">
        <button className="arrow left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="feature-slider" ref={scrollRef}>
          {features.map((feature, index) => (
            <motion.div
              className="feature-card color-card"
              key={index}
              style={{ background: feature.color }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
              <Link to={feature.path} className="know-more">
                Know More →
              </Link>
            </motion.div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
};

export default WhyChooseSection;
