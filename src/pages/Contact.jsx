import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", query: "" });
  };

  return (
    <div className="contact-wrapper">

      {/* HEADER SECTION */}
      <div className="contact-hero">
        <h1>Still need help?</h1>
        <p>
          Don't hesitate to contact us about any question you might be interested in.
          We're here to help you!
        </p>
      </div>

      <div className="contact-content">

        {/* LEFT — FORM */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <label>Name <span className="required">*</span></label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              placeholder="Enter your valid Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Query <span className="required">*</span></label>
            <textarea
              name="query"
              placeholder="Enter your query"
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>

            <button className="submit-btn">Submit</button>
          </form>
        </div>

        {/* RIGHT — CONTACT INFO */}
        <div className="contact-info-box">
          <h2>Contact Us</h2>

          <div className="info-row">
            <MdEmail className="info-icon" />
            <span>info@easemargin.com</span>
          </div>

          <div className="info-row">
            <MdPhone className="info-icon" />
            <span>+91 82693 41122, +91 82693 71122</span>
          </div>

          <div className="info-row">
            <MdLocationOn className="info-icon" />
            <span>Priyanka Apartment, Hathital, Jabalpur (M.P.) - 482001</span>
          </div>

          <h3>Office Hours:</h3>
          <p>Monday – Saturday: 10:00 AM – 7:30 PM<br />Sunday: Closed</p>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/ease-margin/" target="_blank">
              <FaLinkedin className="social-icon" />
            </a>

            <a href="https://www.instagram.com/easemargin_?igsh=OXlzbXdtMThoZ21q" target="_blank">
              <FaInstagram className="social-icon" />
            </a>

            <a href="https://www.facebook.com/share/17f9XDDkbP/" target="_blank">
              <FaFacebook className="social-icon" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
