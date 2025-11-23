import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h2>Empowering Indian Manufacturing with Ease Margin</h2>
        <p>
          In today’s fast-paced industrial world, manufacturers need efficient, streamlined, and technologically advanced tools to remain competitive. 
          <b> Ease Margin</b> was created with one simple yet powerful goal: to empower India’s manufacturing sector with an advanced, easy-to-use manufacturing management software. 
          By optimizing processes, improving efficiency, and enabling seamless workflow automation, Ease Margin helps businesses enhance their profit margins while keeping operations simple.
        </p>
      </section>

      <section className="about-bridge">
        <h2>Bridging the Gap in Manufacturing Management</h2>
        <p>
          India’s manufacturing sector is growing rapidly, contributing significantly to the country’s economy. 
          However, many businesses still rely on manual processes, outdated systems, or fragmented software that create inefficiencies. 
          <b> Ease Margin bridges this gap </b> by offering a modern, AI-powered, and cloud-based ERP system that simplifies production planning, inventory management, sales tracking, and overall operations.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Ease Margin, our mission is to empower India’s manufacturing sector by providing an intelligent, efficient, and easy-to-use ERP solution 
          that helps businesses streamline operations, reduce inefficiencies, and maximize profitability.
        </p>

        <div className="mission-box">
          <ul>
            <li><b>Simplifying Manufacturing Processes:</b> Eliminating manual errors and automating workflows for seamless production management.</li>
            <li><b>Driving Innovation:</b> Leveraging AI-powered insights and modern technology to optimize supply chains, inventory, and sales tracking.</li>
            <li><b>Enhancing Business Growth:</b> Helping manufacturers scale efficiently with a cost-effective, cloud-based ERP system.</li>
            <li><b>Enabling Transparency & Control:</b> Providing real-time analytics, intuitive dashboards, and seamless integrations for better decision-making.</li>
          </ul>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We embrace new technologies to continuously improve our solutions.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>We work as a team to deliver the best results for our clients.</p>
          </div>
          <div className="value-card">
            <h3>Ownership</h3>
            <p>We take responsibility for our actions and strive for excellence.</p>
          </div>
          <div className="value-card">
            <h3>Transparency</h3>
            <p>We believe in open communication and honest business practices.</p>
          </div>
        </div>
      </section>

      <section className="about-target">
        <h2>Target Market</h2>
        <p>
          Ease Margin is tailored to empower India’s Small and Medium-Sized Enterprises (SMEs) in the manufacturing sector, 
          aiming to streamline and optimize their daily operations such as inventory management, production tracking, and purchase activity. 
          Growing with technology is a necessity, and our manufacturers are a strong pillar of India’s growing economy.
        </p>
      </section>

      <section className="about-history">
        <h2>Brief Company History</h2>
        <p>
          Founded with a deep understanding of the challenges faced by small and medium-sized manufacturers, 
          Ease Margin was built to simplify and digitize core manufacturing operations. 
          The founding team brings together years of hands-on experience in MSME manufacturing, sales, and business growth, 
          combined with strong expertise in technology and product development.
        </p>
        <p>Starting with the vision to empower manufacturers with an easy-to-use, affordable, and intelligent platform,
           Ease Margin has evolved into a comprehensive solution for managing inventory, production, procurement, 
           and quality processes all from a single dashboard. Today, Ease Margin continues to bridge the technology gap for MSMEs,
           helping them improve efficiency, reduce wastage, and make data-driven decisions for sustainable growth.</p>
      </section>
    </div>
  );
};

export default AboutUs;
