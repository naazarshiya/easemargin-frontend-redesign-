import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

       
      <div className="footer-container">

        
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Automate your manufacturing workflow and enhance your margin with ease.
            Streamline your processes, manage inventory, create documents, and
            generate real-time reports effortlessly.
          </p>
        </div>
 
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/inventory">Inventory Management</Link></li>
            <li><Link to="/sales">Sales Management</Link></li>
            <li><Link to="/purchase">Purchase Management</Link></li>
            <li><Link to="/service">Service Management</Link></li>
            <li><Link to="/payments">Payments Management</Link></li>
            <li><Link to="/material-planning">Material Planning</Link></li>
            <li><Link to="/bom">Bill of Materials</Link></li>
            <li><Link to="/production">Production Management</Link></li>
            <li><Link to="/jobwork">Job Work Management</Link></li>
          </ul>
        </div>

         
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/request-demo">Request a Demo</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

         
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/refund">Refund & Cancellation</Link></li>
          </ul>
        </div>

         
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/17f9XDDkbP/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/ease-margin/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/easemargin_?igsh=OXlzbXdtMThoZ21q" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

      </div>

       
      <div className="footer-brand-bottom">
        Ease Margin
      </div>
 
      <div className="footer-bottom">
        <p>© 2025 Ease Margin. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
