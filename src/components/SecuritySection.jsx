import React from "react";
import "./SecuritySection.css";
import { FaLock, FaCheckCircle, FaChartLine } from "react-icons/fa";

const SecuritySection = () => {
  const features = [
    {
      icon: <FaLock className="icon lock" />,
      title: "Data Security",
      points: [
        "Data encryption with secured network",
        "Security audits regularly",
        "Secure cloud servers for data storage",
      ],
    },
    {
      icon: <FaCheckCircle className="icon tick" />,
      title: "System Reliability",
      points: [
        "Efficient Operating time and availability",
        "Data recovery plans for handling any disaster situation.",
        
      ],
    },
    {
      icon: <FaChartLine className="icon graph" />,
      title: "Real-Time Analytics",
      points: [
        "Track and display real-time usage statistics of key features",
        "Identify bottlenecks or areas for improvement",
        "Collect real-time feedback and satisfaction scores",
      ],
    },
  ];

  return (
    <section className="security-section">
      <div className="security-header">
        <span className="badge">Security & Reliability</span>
        <h2 className="security-title">
          Enterprise-Grade Security & Unmatched Reliability
        </h2>
        <p className="security-subtitle">
          Your data is protected with advanced encryption, secure cloud
          infrastructure, and real-time monitoring — ensuring 99.9% uptime and
          maximum reliability.
        </p>
      </div>

      <div className="security-boxes">
        {features.map((feature, index) => (
          <div className="security-box" key={index}>
            {feature.icon}
            <h3>{feature.title}</h3>
            <ul>
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySection;
