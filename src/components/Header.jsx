import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
       
      <div className="header-inner">

        <div className="left-area">
          <div className="menu-icon" onClick={toggleMenu} aria-hidden>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>

          <div className="logo-container">
            <img src={logo} alt="Ease Margin Logo" className="logo-img" />
            <div className="logo">Ease Margin</div>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/free-invoicing">Free Invoicing</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>

          <div className="mobile-sections">
            <div className="menu-section">
              <h4>Business</h4>
              <Link to="/request-demo">Request a Demo</Link>
            </div>
            <div className="menu-section">
              <h4>Help</h4>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="menu-section">
              <h4>Account</h4>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </nav>

        <div className="header-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/request-demo" className="btn demo-btn">Request a Demo</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
