import React from "react";
import "../style/enquiryStyle.css";
import priceImg from "../assets/pricing.png";

function Enqiry() {
  return (
    <>
      <div className="work-container">
        <strong className="work-heading"> How It Works:</strong>
        <p className="work-para">
          <strong>1.</strong> Brainstorm Idea
        </p>
        <p className="work-para">
          <strong>2.</strong> Logo Design Development
        </p>
        <p className="work-para">
          <strong>3.</strong> Review, Feedback, and Revisions
        </p>
        <p className="work-para">
          <strong>4.</strong> Project Finalization
        </p>
      </div>
      <div className="wrap-text">
        <p className="wrap-text-para">
          Our Clients Believe Our Creative Logo Design Services Are To Die For
        </p>
        <button className="text-btn">Contact Us</button>
      </div>
      <div className="price-enqiury">
        <h1 className="price-heading">
          Pocket-Friendly<br></br> Price Packages
        </h1>
        <p className="price-para">
          Mattis enim ut tellus elementum sagittis vitae et. Leo in vitae turpis
          massa. Arcu cursus vitae congue mauris rhoncus.
        </p>
        <img src={priceImg} alt="" className="price-img"></img>
      </div>
    </>
  );
}

export default Enqiry;
