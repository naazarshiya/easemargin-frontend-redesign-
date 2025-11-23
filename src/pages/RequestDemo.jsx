import React, { useState } from "react";
import "./RequestDemo.css";
import demoImage from "../assets/demoImage.jpg";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    sector: "",
    companySize: "",
    turnover: "",
    currentERP: "",
    modules: [],
    hearAbout: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        modules: checked
          ? [...prev.modules, value]
          : prev.modules.filter((m) => m !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your demo request has been submitted successfully!");
  };

  return (
    <div className="demo-wrapper">
       
      <div className="demo-left-dark">
        <h2 className="demo-title">We’d love to show you around.</h2>

        <p className="demo-subtext">
          Sign up for a personalized demo today to see how <b>Ease Margin</b>{" "}
          drives business growth and helps you manage operations efficiently.
        </p>

        <img src={demoImage} className="demo-illustration" alt="demo" />

        <div className="demo-points">
          <h4>YOUR CUSTOM DEMO WILL SHOW YOU HOW TO:</h4>

          <ul>
            <li>
              <span>✔</span> <b>Predict Inventory with AI</b> — eliminate manual
              tracking and optimize stock levels.
            </li>
            <li>
              <span>✔</span> <b>Streamline Production</b> — plan, schedule and
              track manufacturing.
            </li>
            <li>
              <span>✔</span> <b>Track Sales & Purchases</b> — real-time alerts and
              updates.
            </li>
            <li>
              <span>✔</span> <b>Simplify Billing & Invoicing</b> — centralized
              financial control.
            </li>
            <li>
              <span>✔</span> <b>Make Smarter Decisions</b> — analytics & reports.
            </li>
          </ul>
        </div>
      </div>

       
      <div className="demo-right-card">
        <form onSubmit={handleSubmit}>
          <h3 className="form-heading">Request a Demo</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" name="fullName" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" name="email" required onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" name="phone" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Company Name *</label>
              <input type="text" name="companyName" required onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company Website *</label>
              <input type="url" name="website" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Sector *</label>
              <input type="text" name="sector" required onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company Size *</label>
              <input type="text" name="companySize" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Current ERP (if any)</label>
              <input type="text" name="currentERP" onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Turnover *</label>
            <input type="text" name="turnover" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Interested Modules:</label>
            <div className="checkbox-row">
              <label><input type="checkbox" value="Free Invoicing" onChange={handleChange} /> Free Invoicing</label>
              <label><input type="checkbox" value="Inventory" onChange={handleChange} /> Inventory</label>
              <label><input type="checkbox" value="Production" onChange={handleChange} /> Production</label>
            </div>
          </div>

          <div className="form-group">
            <label>How did you hear about us? *</label>
            <select name="hearAbout" required onChange={handleChange}>
              <option value="">Select</option>
              <option value="Google">Google</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Referral">Referral</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your Query</label>
            <textarea name="query" placeholder="Write here..." onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="demo-submit-btn">
            Request a Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
