import React from "react";
import wrapImage from "../assets/images1.jpg";
import "../style/wrapperStyle.css";

function Wrapper() {
  return (
    <div className="wrapper-container">
      <div className="wrapper-text">
        <h1 className="wrapper-heading">
          Customize Your Logo with 'Creative Logo Studio'
        </h1>
        <p className="wrapper-para">
          Auctor urna nunc id cursus metus aliquam eleifend. Dolor sit amet
          consectetur adipiscing elit pellentesque habitant morbi tristique.
          Nunc faucibus a pellentesque sit amet. Morbi blandit cursus risus at
          ultrices mi. Consequat mauris nunc congue nisi vitae suscipit tellus
          mauris. Pharetra diam sit amet nisl suscipit adipiscing bibendum est
          ultricies. Malesuada proin libero nunc consequat interdum.
        </p>
      </div>
      <div className="wrapper-image-container">
        <img src={wrapImage} alt="img" className="wrap-image"></img>
      </div>
    </div>
  );
}

export default Wrapper;
