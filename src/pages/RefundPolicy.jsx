import React from "react";
import "./RefundPolicy.css";
import { FaEnvelopeOpenText } from "react-icons/fa";

const RefundPolicy = () => {
  return (
    <section className="refund-section">
       
      <div className="refund-container" role="main" aria-labelledby="refund-title">
        <h1 id="refund-title">Cancellation and Refund Policy</h1>

        <p>
          At <strong>Ease Margin</strong>, we provide a seamless and efficient{" "}
          <strong>ERP software solution</strong> to optimize your business
          operations. Please review our cancellation and refund policy below.
        </p>

        <h2>1. Subscription & Payment</h2>
        <ul>
          <li>
            Ease Margin operates on a subscription model with monthly, quarterly,
            and annual billing cycles.
          </li>
          <li>
            All payments are processed securely through third-party payment
            gateways (Razorpay, Cashfree).
          </li>
          <li>
            Subscription charges are non-refundable except as explicitly
            mentioned in this policy.
          </li>
        </ul>

        <h2>2. Free Trial & No Refund Policy</h2>
        <ul>
          <li>
            We offer a <strong>7-day free trial</strong> for users to explore the
            platform before subscribing.
          </li>
          <li>
            Once the trial ends, all payments made are <strong>non-refundable</strong>.
          </li>
          <li>
            No refunds are issued for dissatisfaction or failure to use the
            service.
          </li>
        </ul>

        <h2>3. Cancellation Policy</h2>
        <ul>
          <li>
            Users can cancel their subscription anytime from their Ease Margin
            account dashboard.
          </li>
          <li>
            The subscription remains active until the current billing cycle ends.
          </li>
          <li>
            No prorated refunds are provided for mid-cycle cancellations.
          </li>
        </ul>

        <h2>4. Refund Eligibility</h2>
        <p>Refunds will only be considered in the following cases:</p>
        <ul>
          <li>
            <strong>Duplicate Payments</strong> – If you were charged twice for the
            same subscription.
          </li>
          <li>
            <strong>Technical Issues</strong> – If Ease Margin is completely
            non-functional due to system errors.
          </li>
          <li>
            <strong>Unauthorized Transactions</strong> – If a fraudulent transaction
            is reported within 7 days.
          </li>
        </ul>
        <p>
          All refund requests must be submitted within <strong>7 days of payment</strong>.
        </p>

        <h2>5. Payment Disputes & Chargebacks</h2>
        <ul>
          <li>
            If a payment dispute is raised without contacting us, your account may
            be temporarily suspended.
          </li>
          <li>
            Please reach out to our support team at{" "}
            <a href="mailto:info@easemargin.com" className="email-link">
              info@easemargin.com
            </a>{" "}
            before initiating chargebacks.
          </li>
        </ul>

        <h2>6. Changes to This Policy</h2>
        <ul>
          <li>Ease Margin reserves the right to update this policy at any time.</li>
          <li>Updates will be communicated via email and on our official website.</li>
          <li>Continued use of our services implies acceptance of the updated policy.</li>
        </ul>

         
        <div className="help-box" aria-label="Need help">
          <div className="help-box-content">
            <div className="help-text">
              <h3>
                <FaEnvelopeOpenText className="help-icon" aria-hidden="true" />
                Need Help?
              </h3>
              <p>
                If you have any questions regarding refunds or cancellations,
                contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@easemargin.com" className="email-link">
                  info@easemargin.com
                </a>
              </p>
            </div>

            <div className="help-button">
              <a
                href="mailto:info@easemargin.com"
                className="write-us-btn"
                aria-label="Write to us"
              >
                Write Us
              </a>
            </div>
          </div>
        </div>

        <p className="last-updated">© 2025 Ease Margin. All rights reserved.</p>
      </div>
    </section>
  );
};

export default RefundPolicy;
