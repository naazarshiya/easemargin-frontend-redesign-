import React, { useState, useRef } from "react";
import "./BlogDetailAutomation.css";
import blog4 from "../assets/blog4.jpg";  

const BlogDetailAutomation = () => {
  const [comment, setComment] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([]);

  const refs = {
    automation: useRef(null),
    mckinsey: useRef(null),
    benefits: useRef(null),
    productivity: useRef(null),
    cost: useRef(null),
    safety: useRef(null),
    error: useRef(null),
    realtime: useRef(null),
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
      <div className="blog-header" style={{ backgroundImage: `url(${blog4})` }}>
        <div className="overlay"></div>
        <div className="blog-header-content">
          <h1>Top 5 Benefits of Automation in the Manufacturing Industry</h1>
          <p className="subtitle">
            With technologies like AI, robotics, and IIoT emerging, automation in manufacturing is revolutionizing production efficiency.
          </p>
          <p className="author">
            By <b>Mohammad Saif Ali Khan</b> | 8/19/2025
          </p>
        </div>
      </div>

      <div className="blog-main-container">
        <div className="blog-body">
          <p>
            The primary goal of automation in manufacturing is to use technologies and tools to perform dangerous, repetitive, time-consuming, and potentially hazardous tasks with precision, consistency, and speed — unmatched by human workers. This boosts efficiency, accuracy, and productivity while reducing labor costs.
          </p>

          <h2 ref={refs.automation}>What is Manufacturing Automation?</h2>
          <p>
            Automation in manufacturing refers to using technology such as robots, sensors, artificial intelligence, and computer-controlled machines to perform production processes and operations with little to no human intervention.
          </p>

          <h3 ref={refs.mckinsey}>McKinsey Global Institute Study</h3>
          <p>
            According to a <b>McKinsey Global Institute</b> study, up to <b>800 million jobs</b> worldwide could be automated by 2030, a significant portion of which will impact the manufacturing sector.
          </p>

          <h2 ref={refs.benefits}>Top 5 Benefits of Automation in Manufacturing</h2>

          <h3 ref={refs.productivity}>1. Increased Productivity and Efficiency</h3>
          <p>
            Automation significantly increases efficiency and speeds up your production processes while maintaining precision and accuracy. Automated systems work 24/7 without fatigue, helping manufacturers increase throughput and output volumes.
          </p>
          <p>
            With robots handling repetitive tasks, human workers can focus on complex ones — improving overall productivity and working conditions.
          </p>

          <h3 ref={refs.cost}>2. Higher Cost Savings</h3>
          <p>
            While automation requires an initial investment, it’s cost-effective long term. Automated systems lower costs by reducing labor and waste. They optimize material use and minimize downtime, producing more at lower costs — improving profitability.
          </p>

          <h3 ref={refs.safety}>3. Improved Worker Safety</h3>
          <p>
            Automating hazardous tasks protects workers from heavy lifting, exposure to toxins, or extreme conditions. It reduces workplace accidents and creates safer work environments.
          </p>

          <h3 ref={refs.error}>4. Reduces Error, Improving Quality and Consistency</h3>
          <p>
            Machines perform repetitive tasks accurately without fatigue. Automation minimizes defects by maintaining consistent quality and precision. It ensures exact measurements, precise assembly, and adherence to quality standards.
          </p>

          <h3 ref={refs.realtime}>5. Real-Time Data and Analysis for Better Decision Making</h3>
          <p>
            Smart manufacturing systems gather and analyze data in real time. These insights help manufacturers monitor performance, predict trends, and make informed, data-driven decisions for continuous improvement.
          </p>

          <h2>The Final Word</h2>
          <p>
            When you include automation in your manufacturing process, you not only streamline operations but also reduce human error and achieve high-quality outputs faster at lower costs.
          </p>
          <p>
            At <b>Ease Margin</b>, we help automate manufacturing workflows to optimize operations and drive growth. Contact us today to take your business to the next level!
          </p>

         
          <div className="comment-section">
            <h3>💬 Leave us a Comment</h3>
            <p className="comment-subtext">
              Share your insights about automation in manufacturing below.
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
              <button type="submit" className="submit-btn">Add Comment</button>
            </form>

            {comments.length > 0 && (
              <div className="comments-list">
                <h4>Recent Comments</h4>
                {comments.map((c, i) => (
                  <div key={i} className="comment-card">
                    <p><b>{c.name}</b> <span>({c.email})</span></p>
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
            <li onClick={() => handleScroll("automation")}>What is Manufacturing Automation?</li>
            <li onClick={() => handleScroll("mckinsey")}>McKinsey Global Institute</li>
            <li onClick={() => handleScroll("benefits")}>Top 5 Benefits of Automation</li>
            <li onClick={() => handleScroll("productivity")}>Increased Productivity and Efficiency</li>
            <li onClick={() => handleScroll("cost")}>Higher Cost Savings</li>
            <li onClick={() => handleScroll("safety")}>Improved Worker Safety</li>
            <li onClick={() => handleScroll("error")}>Reduces Error & Improves Quality</li>
            <li onClick={() => handleScroll("realtime")}>Real-Time Data & Analysis</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailAutomation;
