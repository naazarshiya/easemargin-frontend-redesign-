import React, { useState, useRef } from "react";
import "./BlogDetailBOM.css";
import blog1 from "../assets/blog1.jpg";  

const BlogDetailBOM = () => {
  const [comment, setComment] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([]);

   
  const refs = {
    intro: useRef(null),
    what: useRef(null),
    uses: useRef(null),
    components: useRef(null),
    finished: useRef(null),
    raw: useRef(null),
    routing: useRef(null),
    scrap: useRef(null),
    costs: useRef(null),
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
       
      <div className="blog-header" style={{ backgroundImage: `url(${blog1})` }}>
        <div className="overlay"></div>
        <div className="blog-header-content">
          <h1>Let Us Understand Bill of Materials (BOM)</h1>
          <p className="subtitle">
            This article will help you understand the meaning of the Bill of Materials, its components, and its uses.
          </p>
          <p className="author">
            By <b>Mohammad Saif Ali Khan</b> | 8/19/2025
          </p>
        </div>
      </div>

       
      <div className="blog-main-container">
        <div className="blog-body">
          <p ref={refs.intro}>
            The Bill of Materials (BOM) is a crucial document in the manufacturing process. It serves as a blueprint or recipe for creating a product — listing all required materials, components, and the processes needed for production.
          </p>

          <h2 ref={refs.what}>What is a Bill of Materials?</h2>
          <p>
            A Bill of Material is the detailed plan of manufacturing any product. It contains the complete list of raw materials required, their quantities, and the production processes involved.
          </p>
          <p>
            It also helps manufacturers estimate the cost of the finished product and plan inventory accordingly.
          </p>

          <h2 ref={refs.uses}>Uses of the BOM</h2>
          <ul>
            <li>Gives an exact list of raw materials required for production.</li>
            <li>Helps maintain healthy inventory levels by outlining necessary stock.</li>
            <li>
              Assists in production planning by estimating material requirements to meet output goals.
            </li>
            <li>
              Provides insights into setting appropriate pricing and defining profit margins.
            </li>
          </ul>

          <h2 ref={refs.components}>Components of a Bill of Materials</h2>

          <h3 ref={refs.finished}>Finished Goods</h3>
          <p>
            This section defines the final product that will be produced after the manufacturing cycle is complete. It includes the name of the finished good, its unit of measurement (UOM), and the cost allocation percentage (the total cost involved after removing scrap).
          </p>

          <h3 ref={refs.raw}>Raw Materials</h3>
          <p>
            This section specifies all raw materials required to produce the finished goods, along with their quantity and unit of measurement.
          </p>

          <h3 ref={refs.routing}>Routing / Production Process</h3>
          <p>
            This defines all the manufacturing processes involved. For example, if the product is a painted wooden door, “painting” would be listed as a process here.
          </p>

          <h3 ref={refs.scrap}>Scrap</h3>
          <p>
            The Scrap section includes the waste or defective items generated during production, with details like name, UOM, and quantity.
          </p>

          <h3 ref={refs.costs}>Costs</h3>
          <p>
            This section lists all costs involved in manufacturing — including labor, electricity, machine maintenance, and other miscellaneous expenses.
          </p>

          <p>
            <b>Note:</b> A Bill of Material (BOM) is always created for a single unit of finished goods.
          </p>

          <h2>Conclusion</h2>
          <p>
            The BOM is one of the key pillars of any manufacturing industry. It enables industries to make data-driven decisions that directly impact profitability and productivity. Every business should aim to create an accurate and detailed Bill of Materials for maximum efficiency.
          </p>
 
          <div className="comment-section">
            <h3>💬 Leave us a Comment</h3>
            <p className="comment-subtext">
              Have thoughts about this article? Share them below!
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

        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>📘 Table of Contents</h3>
          <ul>
            <li onClick={() => handleScroll("intro")}>Let Us Understand BOM</li>
            <li onClick={() => handleScroll("what")}>What is a Bill of Materials?</li>
            <li onClick={() => handleScroll("uses")}>Uses of BOM</li>
            <li onClick={() => handleScroll("components")}>Components of BOM</li>
            <li onClick={() => handleScroll("finished")}>Finished Goods</li>
            <li onClick={() => handleScroll("raw")}>Raw Materials</li>
            <li onClick={() => handleScroll("routing")}>Routing / Production Process</li>
            <li onClick={() => handleScroll("scrap")}>Scrap</li>
            <li onClick={() => handleScroll("costs")}>Costs</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailBOM;
