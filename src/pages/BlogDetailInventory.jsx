import React, { useState, useRef } from "react";
import "./BlogDetailInventory.css";
import blog6 from "../assets/blog6.jpg";  

const BlogDetailInventory = () => {
  const [comment, setComment] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([]);
 
  const refs = {
    intro: useRef(null),
    stock: useRef(null),
    sales: useRef(null),
    supplier: useRef(null),
    safety: useRef(null),
    fifo: useRef(null),
    technology: useRef(null),
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
       
      <div className="blog-header" style={{ backgroundImage: `url(${blog6})` }}>
        <div className="overlay"></div>
        <div className="blog-header-content">
          <h1>6 Factors to Keep in Mind When Choosing an Inventory Management Software</h1>
          <p className="subtitle">
            Learn how to streamline your inventory system and boost efficiency with these six smart practices.
          </p>
          <p className="author">
            By <b>Mohammad Saif Ali Khan</b> | 8/30/2025
          </p>
        </div>
      </div>

       
      <div className="blog-main-container">
        <div className="blog-body">
          <p ref={refs.intro}>
            Inventory Management is the process of keeping track of and controlling your business’s stock. It ensures the right product is available in the right quantity, at the right place, and time.
          </p>

          <p>
            In today’s blog, we’ll discuss how you can manage inventory efficiently and the six key factors you should consider to get the most out of your inventory system.
          </p>

          <h2>How to Manage Inventory: Tips, Tricks & Techniques</h2>

          <p>
            Though it might sound simple, inventory management plays a vital role in your business’s profitability. Poor inventory control can cause irreversible losses — but following these tips can help prevent that.
          </p>

          <h3 ref={refs.stock}>1. Keep Track of Your Stock</h3>
          <p>
            The first step is reviewing and maintaining accurate records of all stock items. Tracking details like barcodes, expiration dates, and product pricing helps create a well-managed inventory that’s easy to monitor and reorder.
          </p>

          <h3 ref={refs.sales}>2. Track Your Sales</h3>
          <p>
            Sales tracking goes beyond daily totals. It involves analyzing which products sell best in particular seasons, identifying customer preferences, and pairing complementary products together to increase sales.
          </p>

          <h3 ref={refs.supplier}>3. Analyze Your Supplier Behaviour</h3>
          <p>
            A reliable supplier is crucial. If your supplier frequently delays deliveries or sends incomplete orders, it’s time to reassess. Unreliable suppliers cause stock imbalances and potential shortages during peak demand.
          </p>

          <h3 ref={refs.safety}>4. Utilize the Safety Stock Methodology</h3>
          <p>
            Safety stock refers to extra inventory reserved for emergencies or supply disruptions. Incorporating this strategy ensures you can meet customer demands even when supply chain issues arise.
          </p>

          <h3 ref={refs.fifo}>5. Make Use of the First In, First Out (FIFO) Method</h3>
          <p>
            The FIFO approach ensures that older inventory (first in) is sold first, maintaining freshness and avoiding product obsolescence. This is especially vital for perishable goods or fast-moving consumer products.
          </p>
          <p>
            To use this effectively, keep older inventory in front and newer stock behind — ensuring efficient stock rotation.
          </p>

          <h3 ref={refs.technology}>6. Invest in Updated Inventory Management Technology</h3>
          <p>
            The right inventory management software simplifies operations by automating tracking, analytics, and reordering. When choosing one, ensure it provides accurate reporting, easy integration, and an intuitive interface.
          </p>

          <h2 ref={refs.final}>The Final Words</h2>
          <p>
            Managing inventory correctly is essential for maximizing profit and reducing waste. But it can be challenging — and that’s where <b>Ease Margin</b> can help.
          </p>
          <p>
            Our smart inventory management systems offer real-time insights into stock movement and analytics that help you make data-driven decisions. Contact us today for a <b>free demo</b> and take control of your inventory like never before.
          </p>

        
          <div className="comment-section">
            <h3>💬 Leave us a Comment</h3>
            <p className="comment-subtext">
              Share your experiences or tips about managing inventory efficiently!
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
            <li onClick={() => handleScroll("intro")}>How to Manage Inventory</li>
            <li onClick={() => handleScroll("stock")}>Keep Track of Your Stock</li>
            <li onClick={() => handleScroll("sales")}>Track Your Sales</li>
            <li onClick={() => handleScroll("supplier")}>Analyze Supplier Behaviour</li>
            <li onClick={() => handleScroll("safety")}>Utilize Safety Stock</li>
            <li onClick={() => handleScroll("fifo")}>First In, First Out (FIFO)</li>
            <li onClick={() => handleScroll("technology")}>Updated Technology</li>
            <li onClick={() => handleScroll("final")}>Final Words</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailInventory;
