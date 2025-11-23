import React, { useState, useRef } from "react";
import "./BlogDetailSemiconductor.css";
import blog3 from "../assets/blog3.jpg";  

const BlogDetailSemiconductor = () => {
  const [comment, setComment] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([]);

  
  const refs = {
    advantages: useRef(null),
    innovation: useRef(null),
    productivity: useRef(null),
    job: useRef(null),
    revenue: useRef(null),
    investment: useRef(null),
    bel: useRef(null),
    hcl: useRef(null),
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
       
      <div className="blog-header" style={{ backgroundImage: `url(${blog3})` }}>
        <div className="overlay"></div>
        <div className="blog-header-content">
          <h1>Semiconductor Manufacturing in India</h1>
          <p className="subtitle">
            India's semiconductor industry is rapidly growing, driven by government initiatives and international collaborations.
          </p>
          <p className="author">
            By <b>Ankita Sen</b> | 2/20/2025
          </p>
        </div>
      </div>

       
      <div className="blog-main-container">
        <div className="blog-body">
          <h2>India’s Semiconductor Revolution</h2>
          <p>
            India has started its revolution in the international semiconductor market by establishing its existence and might be a valuable hub for semiconductor manufacturing in the years to come.
          </p>
          <p>
            Semiconductor manufacturing being an essentially inter-disciplinary endeavor, could present opportunities to a wider array of professionals such as process and control engineers, data scientists, material scientists, physicists, and chemical engineers to contribute meaningfully to this industry.
          </p>

          <h2 ref={refs.advantages}>Advantages of Semiconductor Manufacturing</h2>

          <h3 ref={refs.innovation}>Technological Advancements</h3>
          <p><b>1. Innovation Hub:</b> Semiconductor manufacturing fosters a culture of innovation, driving advancements in related technologies like AI, IoT, and 5G.</p>
          <p ref={refs.productivity}><b>2. Improved Productivity:</b> Semiconductors enable the development of faster, smaller, and more efficient electronic devices, boosting productivity across industries.</p>

          <h3>Economic Benefits</h3>
          <p ref={refs.job}><b>1. Job Creation:</b> Semiconductor manufacturing creates a significant number of jobs, both directly and indirectly, contributing to local economic growth.</p>
          <p ref={refs.revenue}><b>2. Revenue Generation:</b> The semiconductor industry generates substantial revenue, contributing to the country's GDP and foreign exchange earnings.</p>
          <p ref={refs.investment}><b>3. Investment Attraction:</b> A strong semiconductor industry attracts investments from leading global companies, fostering innovation and technology transfer.</p>
          <p>
            India's semiconductor market is expected to be worth <b>$64 billion by 2026</b>, driven by growing demand for electronics, IoT devices, automotive electronics, and telecommunication infrastructure.
          </p>

          <h2>Key Players in India’s Semiconductor Industry</h2>
          <p ref={refs.bel}><b>Bharat Electronics Limited (BEL):</b> Designing and developing advanced semiconductor devices for defense and strategic applications.</p>
          <p ref={refs.hcl}><b>HCL Technologies Ltd:</b> Providing semiconductor design services, including analog and digital design, verification, and testing.</p>
          <p>
            India is poised to witness exponential growth in its semiconductor industry with the advent of well-thought initiatives as well as calculated partnerships.
          </p>

           
          <div className="comment-section">
            <h3>💬 Leave us a Comment</h3>
            <p className="comment-subtext">
              Share your thoughts or experiences about semiconductor manufacturing in India.
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
            <li onClick={() => handleScroll("advantages")}>Advantages of Semiconductor Manufacturing</li>
            <li onClick={() => handleScroll("innovation")}>Innovation Hub</li>
            <li onClick={() => handleScroll("productivity")}>Improved Productivity</li>
            <li onClick={() => handleScroll("job")}>Job Creation</li>
            <li onClick={() => handleScroll("revenue")}>Revenue Generation</li>
            <li onClick={() => handleScroll("investment")}>Investment Attraction</li>
            <li onClick={() => handleScroll("bel")}>Bharat Electronics Limited (BEL)</li>
            <li onClick={() => handleScroll("hcl")}>HCL Technologies Ltd</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailSemiconductor;
