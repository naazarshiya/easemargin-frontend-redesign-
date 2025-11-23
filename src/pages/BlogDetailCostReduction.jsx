import React, { useState, useRef } from "react";
import "./BlogDetailCostReduction.css";
import blog5 from "../assets/blog5.jpg";  

const BlogDetailCostReduction = () => {
  const [comment, setComment] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([]);
 
  const refs = {
    intro: useRef(null),
    audits: useRef(null),
    lean: useRef(null),
    inventory: useRef(null),
    energy: useRef(null),
    automation: useRef(null),
    final: useRef(null),
  };

  const handleScroll = (refName) => {
    refs[refName].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.name && comment.email && comment.message) {
      setComments([...comments, comment]);
      setComment({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="blog-detail-page">
       
      <div className="blog-header" style={{ backgroundImage: `url(${blog5})` }}>
        <div className="overlay"></div>
        <div className="blog-header-content">
          <h1>5 Best Ways to Reduce the Cost of Production in the Manufacturing Industry</h1>
          <p className="subtitle">
            Discover proven strategies manufacturers use to cut costs while maintaining quality and efficiency.
          </p>
          <p className="author">
            By <b>Mohammad Saif Ali Khan</b> | 8/20/2025
          </p>
        </div>
      </div>

      
      
      <div className="blog-main-container">
        <div className="blog-body">
          <p ref={refs.intro}>
            Production costs involve all those expenses that a manufacturer incurs to make the final products and bring them to market. One of the most successful ways for manufacturers to improve their profitability and business viability is by cutting down the cost of production.
          </p>

          <p>
            In this blog, we will take a look at the 5 most effective ways to reduce manufacturing costs without compromising product quality.
          </p>

          <h2>How To Reduce Production Cost in Manufacturing: 5 Best Ways</h2>

          <h3 ref={refs.audits}>1. Conduct Routine Audits</h3>
          <p>
            The first step in reducing manufacturing costs is auditing all your operating expenses — employee wages, workflow, overhead, maintenance, utilities, and administrative costs. Identify what can be optimized or eliminated.
          </p>
          <p>
            Routine audits help manufacturers understand unnecessary spending and highlight areas where efficiency improvements can lower costs without hurting output quality.
          </p>

          <h3 ref={refs.lean}>2. Adopt Lean Manufacturing Practices</h3>
          <p>
            Lean production focuses on achieving more output with fewer inputs by eliminating waste. Common waste types include overproduction, waiting time, defects, unnecessary transport, and excess inventory.
          </p>
          <p>
            According to the <b>Lean Enterprise Research Center (LERC)</b>, over 60% of production activities in manufacturing add no customer value. Implementing lean principles can drastically increase process efficiency.
          </p>

          <h3 ref={refs.inventory}>3. Manage Inventory Efficiently</h3>
          <p>
            Efficient inventory management is key to cost control. Implementing inventory software helps manufacturers manage stock and ensure materials are available in the right place at the right time.
          </p>
          <p>
            Proper inventory management minimizes bottlenecks, avoids overstocking, and prevents waste from expired or obsolete materials — leading to significant savings.
          </p>

          <h3 ref={refs.energy}>4. Reduce Energy Use (Be Greener)</h3>
          <p>
            Reducing energy consumption not only cuts costs but also enhances your company’s sustainability. Conduct energy audits to identify inefficiencies and take steps such as:
          </p>
          <ul>
            <li>Implementing a continuous improvement strategy</li>
            <li>Installing energy-efficient lighting</li>
            <li>Optimizing air compressors and fixing leaks</li>
            <li>Replacing outdated HVAC systems</li>
            <li>Creating an energy management team</li>
            <li>Rescheduling high-energy machinery usage</li>
          </ul>
          <p>
            Green initiatives make your brand more attractive to customers and investors while improving long-term profitability.
          </p>

          <h3 ref={refs.automation}>5. Switch to Automation</h3>
          <p>
            Automation is one of the best ways to reduce manufacturing costs. From production and assembly to tracking and monitoring, automation eliminates waste, reduces labor costs, and ensures compliance.
          </p>
          <p>
            It also decreases delivery times and improves product quality. You can read our blog on <b>Benefits of Automation in Manufacturing</b> to explore this further.
          </p>

          <h2 ref={refs.final}>Final Thoughts</h2>
          <p>
            Lowering production costs doesn’t mean cutting jobs or compromising quality. These strategies can help manufacturers cut expenses while maintaining a motivated workforce and top-notch product standards.
          </p>
          <p>
            Contact <b>Ease Margin</b> today to learn how you can maximize profits and efficiency in your manufacturing operations!
          </p>

        
        
          <div className="comment-section">
            <h3>💬 Leave us a Comment</h3>
            <p className="comment-subtext">
              What cost-saving methods have worked for your business? Let us know below!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={comment.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={comment.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Your Comment</label>
                <textarea
                  name="message"
                  rows="4"
                  value={comment.message}
                  onChange={handleChange}
                  placeholder="Write your comment here..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Add Comment
              </button>
            </form>

            {comments.length > 0 && (
              <div className="comments-list">
                <h4>Recent Comments</h4>
                {comments.map((c, i) => (
                  <div key={i} className="comment-card">
                    <p>
                      <b>{c.name}</b> <span>({c.email})</span>
                    </p>
                    <p>{c.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        
        
        <aside className="sidebar">
          <h3>📘 Table of Contents</h3>
          <ul>
            <li onClick={() => handleScroll("intro")}>How To Reduce Production Cost</li>
            <li onClick={() => handleScroll("audits")}>Conduct Routine Audits</li>
            <li onClick={() => handleScroll("lean")}>Adopt Lean Manufacturing Practices</li>
            <li onClick={() => handleScroll("inventory")}>Manage Inventory Efficiently</li>
            <li onClick={() => handleScroll("energy")}>Reduce Energy Use (Be Greener)</li>
            <li onClick={() => handleScroll("automation")}>Switch to Automation</li>
            <li onClick={() => handleScroll("final")}>Final Thoughts</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailCostReduction;
