import React from "react";
import "./FreeInvoicing.css";
import { FaFileInvoice, FaShareAlt, FaFilePdf, FaUserFriends } from "react-icons/fa";
import PageHero from "../pages/PageHero";

const FreeInvoicing = () => {
  return (
    <div className="invoice-page">

      
      <PageHero
        title="The Ultimate Free Invoicing Solution"
        subtitle="Say goodbye to complex and costly invoicing software! Create, customize, and send invoices effortlessly — built for freelancers, businesses, and enterprises."
      />

       
      <section className="invoice-features">
        <div className="page-container">
          <h2>Why Choose Our Free Invoicing Platform?</h2>

          <div className="features-grid">
            <div className="feature-card">
              <FaFileInvoice className="feature-icon" />
              <h3>Customizable Invoices</h3>
              <p>
                Easily add your logo, adjust fields, and include taxes, discounts, and terms.
              </p>
            </div>

            <div className="feature-card">
              <FaShareAlt className="feature-icon" />
              <h3>Instant Sharing</h3>
              <p>Send invoices to clients via Email or WhatsApp in one click.</p>
            </div>

            <div className="feature-card">
              <FaFilePdf className="feature-icon" />
              <h3>PDF Download</h3>
              <p>Generate clean, professional PDF invoices instantly.</p>
            </div>

            <div className="feature-card">
              <FaUserFriends className="feature-icon" />
              <h3>User-Friendly Interface</h3>
              <p>Create invoices without technical skills — simple & fast.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="invoice-discover">
        <div className="page-container">
          <h2>Discover the Beauty of Our Invoicing Platform</h2>
          <p>
            A clean and intuitive dashboard to manage invoices effortlessly with previews,
            automation, and smooth navigation.
          </p>
        </div>
      </section>

       
      <section className="invoice-faq">
        <div className="page-container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-container">
            <details className="faq-item">
              <summary>Will I be able to create invoices for free?</summary>
              <p>Yes! The platform is completely free with no hidden costs.</p>
            </details>

            <details className="faq-item">
              <summary>Will my data be safe and secured?</summary>
              <p>Your data is fully encrypted and securely stored.</p>
            </details>

            <details className="faq-item">
              <summary>Can I convert my invoice into PDF?</summary>
              <p>Absolutely — download every invoice as a high-quality PDF.</p>
            </details>

            <details className="faq-item">
              <summary>How do I accept payments?</summary>
              <p>You can integrate any supported payment method.</p>
            </details>

            <details className="faq-item">
              <summary>How can I contact Ease Margin?</summary>
              <p>You can reach us anytime at info@easemargin.com.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FreeInvoicing;
