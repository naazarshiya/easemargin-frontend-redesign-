import React from "react";
import { Link } from "react-router-dom";
import "./PageHero.css";

const PageHero = ({ title, subtitle, buttonText = "Request a Demo" }) => {
  return (
    <section className="pagehero">
      <div className="pagehero-inner">

        <h1>{title}</h1>

        <p>{subtitle}</p>

        <div className="pagehero-btn">
          <Link to="/request-demo" className="btn-orange">
            {buttonText}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PageHero;
