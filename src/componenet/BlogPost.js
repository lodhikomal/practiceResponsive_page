import React from "react";
import "../style/BlogPostStyle.css";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blogName1 from "../assets/blogName1.jpg";
import blogName2 from "../assets/blogName2.jpg";
import blogName3 from "../assets/blogName3.jpg";
import blogName4 from "../assets/blogName4.jpg";

function BlogPost() {
  return (
    <div className="blog-container">
      <h1 className="blog-heading">Latest blog posts</h1>
      <div className="blog-card">
        <div className="blog-card1">
          <img src={blog1} alt="" className="blog-img"></img>
          <div className="blog-address">
            <p className="blog-para">
              Ornare arcu odio<br></br> ut sem
            </p>
            <div className="blogger">
              <img src={blogName1} alt="" className="blog-nameImg"></img>
              <p className="blog-name">Adriana Miller</p>
            </div>
          </div>
        </div>
        <div className="blog-card1">
          <img src={blog2} alt="" className="blog-img"></img>
          <div className="blog-address">
            <p className="blog-para">
              Eget dolor morbi non arcu risus quis varius
            </p>
            <div className="blogger">
              <img src={blogName2} alt="" className="blog-nameImg"></img>
              <p className="blog-name">Jenny Williams</p>
            </div>
          </div>
        </div>
        <div className="blog-card1">
          <img src={blog3} alt="" className="blog-img"></img>
          <div className="blog-address">
            <p className="blog-para">Pharetra pharetra massa massa </p>
            <div className="blogger">
              <img src={blogName3} alt="" className="blog-nameImg"></img>
              <p className="blog-name">Jennifer Davis</p>
            </div>
          </div>
        </div>
        <div className="blog-card1">
          <img src={blog4} alt="" className="blog-img"></img>
          <div className="blog-address">
            <p className="blog-para">
              Dolor morbi non arcu risus quis fringilla{" "}
            </p>
            <div className="blogger">
              <img src={blogName4} alt="" className="blog-nameImg"></img>
              <p className="blog-name">Ethan Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
