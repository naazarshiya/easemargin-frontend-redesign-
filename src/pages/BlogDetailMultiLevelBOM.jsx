import React, { useState, useRef } from "react";
import "./BlogDetailMultiLevelBOM.css";
import blog2 from "../assets/blog2.jpg";  

const BlogDetailMultiLevelBOM = () => {
  const [comment, setComment] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([]);

  const refs = {
    intro: useRef(null),
    battery: useRef(null),
    cycle: useRef(null),
    frame: useRef(null),
    finished: useRef(null),
    processes: useRef(null),
    scrap: useRef(null),
    benefits: useRef(null),
    best: useRef(null),
  };

  const handleScroll = (section) => {
    refs[section].current.scrollIntoView({ behavior: "smooth" });
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
       
      <div className="blog-header" style={{ backgroundImage: `url(${blog2})` }}>
        <div className="overlay"></div>
        <div className="blog-header-content">
          <h1>Importance of Multilevel Bill of Materials in Manufacturing Industry</h1>
          <p className="subtitle">
            Understand how a multilevel BOM helps manage complex assemblies efficiently in modern manufacturing.
          </p>
          <p className="author">
            By <b>Harish Chandra</b> | 8/13/2025
          </p>
        </div>
      </div>
 
      <div className="blog-main-container">
        <div className="blog-body">
          <h2 ref={refs.intro}>Introduction</h2>
          <p>
            A Bill of Materials (BOM) is a crucial document for production planning and inventory management that provides instructions for assembling products. The Multilevel Bill of Materials (BOM) represents complex manufacturing structures where semi-finished goods or subassemblies are part of the final product.
          </p>
          <p>
            For instance, when manufacturing an Electric Cycle, you may have subassemblies like Batteries, Cycle Wheels, and Frames — each having its own BOM (child BOMs) contributing to the final assembly.
          </p>

          <h3 ref={refs.battery}>Battery (Semi-Finished Goods)</h3>
          <ul>
            <li>RM001 - Zinc: 10 Kgs</li>
            <li>RM002 - Graphite: 10 Kgs</li>
            <li>RM003 - Metal Case: 100 Nos</li>
          </ul>

          <h3 ref={refs.cycle}>Cycle Wheels (Semi-Finished Goods)</h3>
          <ul>
            <li>RM004 - Rim: 50 Nos</li>
            <li>RM005 - Tyre: 100 Nos</li>
            <li>RM006 - Spokes: 300 Nos</li>
          </ul>

          <h3 ref={refs.frame}>Frame (Semi-Finished Goods)</h3>
          <ul>
            <li>RM007 - Metal: 50 Kgs</li>
            <li>RM008 - Aluminum: 1.5 Kgs</li>
          </ul>

          <h3 ref={refs.finished}>Electric Cycle (Finished Goods)</h3>
          <ul>
            <li>FG001 - Cycle Wheels: 200 Nos</li>
            <li>FG002 - Cycle Frame: 100 Nos</li>
            <li>FG003 - Battery: 100 Nos</li>
          </ul>

          <h3 ref={refs.processes}>Processes</h3>
          <ol>
            <li>Welding</li>
            <li>Polishing</li>
            <li>Painting</li>
            <li>Assembly</li>
          </ol>

          <h3 ref={refs.scrap}>Scrap</h3>
          <ul>
            <li>Metal: 10 Kgs</li>
            <li>Aluminium: 0.5 Kgs</li>
            <li>Graphite: 5 Kgs</li>
          </ul>

          <h2 ref={refs.benefits}>Benefits of Multilevel Bill of Materials</h2>
          <ul>
            <li>✅ <b>Improved Accuracy:</b> Reduces errors in material procurement and planning.</li>
            <li>✅ <b>Enhanced Visibility:</b> Provides real-time insights into material usage and requirements.</li>
            <li>✅ <b>Increased Efficiency:</b> Streamlines production and minimizes waste.</li>
            <li>✅ <b>Better Cost Control:</b> Optimizes material usage and procurement.</li>
            <li>✅ <b>Simplified Inventory Management:</b> Maintains accurate inventory levels and reduces stockouts.</li>
          </ul>

          <h2 ref={refs.best}>Best Practices for Implementing Multilevel BOM</h2>
          <ul>
            <li>Standardize formatting for readability and consistency.</li>
            <li>Automate processes using PLM or ERP systems.</li>
            <li>Collaborate with cross-functional teams for accuracy.</li>
            <li>Regularly review and update BOMs to ensure relevance.</li>
            <li>Train personnel for efficient BOM management.</li>
          </ul>

          <p>
            A well-structured Multilevel BOM is essential for modern manufacturers to ensure efficiency, cost-effectiveness, and quality.  
            <b>Ease Margin</b> offers smart BOM management tools to help you implement and maintain complex BOMs effortlessly.
          </p>
 
          <div className="comment-section">
            <h3>💬 Leave us a Comment</h3>
            <p className="comment-subtext">What are your thoughts on using multi-level BOMs in production?</p>
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
            <li onClick={() => handleScroll("intro")}>Introduction</li>
            <li onClick={() => handleScroll("battery")}>Battery (Semi-Finished)</li>
            <li onClick={() => handleScroll("cycle")}>Cycle Wheels (Semi-Finished)</li>
            <li onClick={() => handleScroll("frame")}>Frame (Semi-Finished)</li>
            <li onClick={() => handleScroll("finished")}>Electric Cycle (Finished)</li>
            <li onClick={() => handleScroll("processes")}>Processes</li>
            <li onClick={() => handleScroll("scrap")}>Scrap</li>
            <li onClick={() => handleScroll("benefits")}>Benefits</li>
            <li onClick={() => handleScroll("best")}>Best Practices</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailMultiLevelBOM;
