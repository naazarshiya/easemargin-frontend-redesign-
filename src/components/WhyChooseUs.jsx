import React from "react";
import { motion } from "framer-motion";
import "./WhyChooseUs.css";

import uiImage from "../assets/ui.jpg";
import customizationImage from "../assets/customization.jpg";
import supportImage from "../assets/support.jpg";
import costImage from "../assets/cost.jpg";
import tallyImage from "../assets/tally.jpg";
import speedImage from "../assets/speed.jpg";

const features = [
  {
    image: uiImage,
    title: "Easy User Interface",
    description: "User-friendly and easy-to-navigate interface.",
  },
  {
    image: customizationImage,
    title: "Customization",
    description:
      "Flexibility in customization processes and workflow. Data mapping automates document flow.",
  },
  {
    image: supportImage,
    title: "Support and Training",
    description:
      "Training programs and Mon–Fri support from 10 AM to 7 PM with industry experts.",
  },
  {
    image: costImage,
    title: "Cost & Time Savings",
    description:
      "Automate manual work, reduce errors, and save both money and hours every month.",
  },
  {
    image: tallyImage,
    title: "Seamless Tally Integration",
    description:
      "Invoices and payments sync automatically, saving hours and ensuring accurate GST.",
  },
  {
    image: speedImage,
    title: "Faster Implementation",
    description:
      "Get Ease Margin up and running in just 2 weeks — faster efficiency with zero delays.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">

      <div className="whyus-header">
        <span className="whyus-pill">Why Choose Us</span>

        <motion.h2
          className="whyus-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <strong>Ease Margin</strong>?
        </motion.h2>

        <motion.p
          className="whyus-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ease Margin is built to help businesses optimize operations, reduce
          manual tasks, and drive profitability with automation and real-time insights.
        </motion.p>
      </div>

      <div className="whyus-cards">
        {features.map((feature, index) => (
          <motion.div
            className="whyus-card"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={feature.image} alt={feature.title} className="whyus-img" />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;
