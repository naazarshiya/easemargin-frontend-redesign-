import React, { useState } from "react";
import "./PricingSection.css";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingType, setBillingType] = useState("yearly");

  const navigate = useNavigate();

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBillingType = (type) => {
    setBillingType(type);
  };

  const plans = [
    {
      name: "Free",
      yearlyPrice: "Free Trial",
      quarterlyPrice: "Free Trial",
      yearlyBilling: "Unlimited Invoicing",
      quarterlyBilling: "Unlimited Invoicing",
      features: [
        "Single User",
        "B2C and B2B Billing",
        "Create Quotations",
        "Analytics and Reports",
      ],
    },

    {
      name: "Silver",
      yearlyPrice: "₹5,000 INR/month",
      quarterlyPrice: "₹20,000 INR/quarter",
      yearlyBilling: "Billed Yearly",
      quarterlyBilling: "Billed Quarterly",
      features: [
        "Up to 5 Users",
        "Manage Sales and Purchase",
        "Inventory Management",
        "Sales and Purchase Forecasting",
        "Dashboard and Reports",
        "Reminders and Alerts",
      ],
    },

    {
      name: "Gold",
      yearlyPrice: "₹10,000 INR/month",
      quarterlyPrice: "₹40,000 INR/quarter",
      yearlyBilling: "Billed Yearly",
      quarterlyBilling: "Billed Quarterly",
      features: [
        "Up to 10 Users",
        "Manage Multiple Stores",
        "Advanced Analytics",
        "Create Bill of Materials",
        "Manage Production",
        "Additional Silver Plan Features",
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <span className="cylinder">Pricing</span>
        <h2>Our Pricing Plans</h2>
        <p>Select the right plan to drive performance and efficiency for your team.</p>

        <div className="billing-toggle">
          <button
            className={billingType === "quarterly" ? "active" : ""}
            onClick={() => handleBillingType("quarterly")}
          >
            Quarterly
          </button>

          <button
            className={billingType === "yearly" ? "active" : ""}
            onClick={() => handleBillingType("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-box ${selectedPlan === plan.name ? "selected" : ""}`}
            onClick={() => handlePlanClick(plan.name)}
          >
            <h3>{plan.name}</h3>

            <h4>
              {billingType === "yearly" ? plan.yearlyPrice : plan.quarterlyPrice}
            </h4>

            <p className="billing">
              {billingType === "yearly" ? plan.yearlyBilling : plan.quarterlyBilling}
            </p>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
              className="demo-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/request-demo");
              }}
            >
              Request a Demo
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
