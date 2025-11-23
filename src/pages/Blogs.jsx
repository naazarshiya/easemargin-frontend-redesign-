import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Let us understand Bill of Materials (BOM)",
    description:
      "This article will help in understanding the meaning of the “Bill of Materials”, its components, and its uses.",
    category: "manufacturing",
  },
  {
    id: 2,
    image: blog2,
    title: "Importance of Multilevel Bill of Materials in Manufacturing Industry",
    description:
      "A multilevel bill of materials lists all materials and components needed to manufacture a specific product.",
    category: "manufacturing",
  },
  {
    id: 3,
    image: blog3,
    title: "Semiconductor Manufacturing in India",
    description:
      "India’s semiconductor industry is rapidly growing, driven by government initiatives and international collaborations.",
    category: "technology",
  },
  {
    id: 4,
    image: blog4,
    title: "Top 5 Benefits of Automation in the Manufacturing Industry",
    description:
      "With new technologies like AI, robotics, and IIoT, automation is transforming manufacturing efficiency.",
    category: "automation",
  },
  {
    id: 5,
    image: blog5,
    title: "5 Best Ways to Reduce the Cost of Production in Manufacturing",
    description:
      "Production costs include all expenses from making to marketing. Here’s how to minimize them effectively.",
    category: "manufacturing",
  },
  {
    id: 6,
    image: blog6,
    title: "6 Factors to Keep in Mind When Choosing Inventory Software",
    description:
      "Inventory Management controls your business’s stock efficiently. Here’s what to check before choosing one.",
    category: "inventory",
  },
];

const Blogs = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

   
  const filteredBlogs = blogs.filter((blog) => {
    const matchesText = blog.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory = category ? blog.category === category : true;

    return matchesText && matchesCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleReadMore = (id) => {
    if (id === 1) navigate("/blogs/bom");
    else if (id === 2) navigate("/blogs/multilevel-bom");
    else if (id === 3) navigate("/blogs/semiconductor");
    else if (id === 4) navigate("/blogs/automation");
    else if (id === 5) navigate("/blogs/cost-reduction");
    else if (id === 6) navigate("/blogs/inventory");
  };

  return (
    <section className="blogs-section page-other">
      
      <div className="blogs-header">
        <h2>Insights, updates, and tips from our team to keep you informed.</h2>
        <p>
          Stay updated with the latest manufacturing and technology trends from
          Ease Margin experts.
        </p>
      </div>

       
      <div className="blogs-filter">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchText}
            className="search-input"
            onChange={(e) => {
              setSearchText(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="category-box">
          <select
            className="category-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Select category</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="technology">Technology</option>
            <option value="automation">Automation</option>
            <option value="inventory">Inventory</option>
          </select>
        </div>
      </div>
 
      <div className="blogs-grid">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-image-container">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>

            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button
                className="read-more"
                onClick={() => handleReadMore(blog.id)}
              >
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="pagination">
        <button
          className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => {
            setCurrentPage((p) => p - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ‹
        </button>

        <span className="page-number">{currentPage}</span>

        <button
          className={`page-btn ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={() => {
            setCurrentPage((p) => p + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Blogs;
