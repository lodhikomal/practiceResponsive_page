import React from "react";
import "../style/NavStyle.css";
// import backgroungImages from "../assets/background.jpg";

function NavBar() {
  return (
    <div className="main-container">
      <div className="navbar">
        <h4 className="logo">GrowthM5</h4>
        <div className="nav-container">
          <a href="#">About</a>
          <a href="#">Works</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <button className="nav-btn">We're hiring</button>
          <i className="ri-menu-line menu-icon"></i>
        </div>
      </div>
      <div className="main-text">
        <p className="main-text-para">About GrowthM5</p>
        <h4 className="main-heading">
          Scelerisque varius morbi enim <br></br>nunc faucibus a pellentesque.
        </h4>
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
}

export default NavBar;
