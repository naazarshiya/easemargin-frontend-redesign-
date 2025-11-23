import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  return (
  <div className="login-page-wrapper">

     
    <div className="orange-bg">
       
    </div>

     
    <div className="login-content-container">
 
      <div className="left-info">
        <h1>Welcome to Ease Margin</h1>
        <p>
          Streamline your manufacturing process, create documents for your sales and purchases,
          manage inventory, fetch real-time data, and generate reports as per requirement.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li><b>Enhance Manufacturing Performance:</b> Improve productivity for small & medium businesses.</li>
          <li><b>Comprehensive Features:</b> Real-time inventory, production, sales & purchase tracking.</li>
          <li><b>Powerful Reporting:</b> Accurate insights for decision-making.</li>
          <li><b>Easy Integration:</b> Works with multiple accounting tools.</li>
          <li><b>User-Friendly Experience:</b> Clean UI, customization & fast support.</li>
        </ul>
      </div>

       
      <div className="right-card">

         
        {showForgot ? (
          <div className="card-box">
            <h2>Reset your password</h2>

            <input type="email" placeholder="Email" className="input-field" />

            <button className="primary-btn" type="button">Send Reset Link</button>

            <p className="back-text" onClick={() => setShowForgot(false)}>
              ← Back to Sign In
            </p>
          </div>
        ) : (
          <div className="card-box">

             
            {!showSignup ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Signed In Successfully!");
                }}
              >
                <h2>Sign in to Ease Margin</h2>

                <input type="email" placeholder="Email address" className="input-field" required />
                <input type="password" placeholder="Password" className="input-field" required />

                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>

                  <span onClick={() => setShowForgot(true)}>Forgot password?</span>
                </div>

                <button className="primary-btn" type="submit">Sign In</button>

                <button
                  className="secondary-btn"
                  type="button"
                  onClick={() => setShowSignup(true)}
                >
                  Create account
                </button>
              </form>
            ) : (

               
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Account Created Successfully!");
                }}
              >
                <h2>Create your Ease Margin account</h2>

                <button className="google-btn" type="button">
                  Continue with Google
                </button>

                <p className="or">or</p>

                <div className="name-row">
                  <input type="text" placeholder="First Name" className="input-field" required />
                  <input type="text" placeholder="Last Name" className="input-field" required />
                </div>

                <div className="name-row">
                  <input type="text" placeholder="Phone" className="input-field" required />
                  <input type="email" placeholder="Email" className="input-field" required />
                </div>

                <div className="name-row">
                  <input type="password" placeholder="Password" className="input-field" required />
                  <input type="password" placeholder="Confirm Password" className="input-field" required />
                </div>

                <button className="primary-btn" type="submit">Create account</button>

                <p className="back-text" onClick={() => setShowSignup(false)}>
                  Already have an account? Sign in
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default Login;
