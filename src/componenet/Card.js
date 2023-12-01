import React from "react";
import "../style/cardStyle.css";
import cardImg from "../assets/images2.jpeg";
import cardImg1 from "../assets/images3.jpeg";
import cardImg2 from "../assets/images4.jpeg";
import appleImg from "../assets/apple.jpeg";

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-1">
          <img src={cardImg} alt="" className="card-img"></img>
          <h5 className="card-heading">Logo Creation</h5>
          <p className="para-card">
            Facilisis gravida neque convallis a cras semper auctor. Faucibus et
            molestie ac feugiat sed lectus. Fermentum posuere urna nec tincidunt
            praesent semper feugiat.
          </p>
        </div>
        <div className="card-1 new-card-1">
          <img src={cardImg1} alt="" className="card-img"></img>
          <h5 className="card-heading">Website Design & Development</h5>
          <p className="para-card">
            Facilisis gravida neque convallis a cras semper auctor. Faucibus et
            molestie ac feugiat sed lectus. Fermentum posuere urna nec tincidunt
            praesent semper feugiat.
          </p>
        </div>
        <div className="card-1">
          <img src={cardImg2} alt="" className="card-img"></img>
          <h5 className="card-heading">Apps Design & Development</h5>
          <p className="para-card">
            Facilisis gravida neque convallis a cras semper auctor. Faucibus et
            molestie ac feugiat sed lectus. Fermentum posuere urna nec tincidunt
            praesent semper feugiat.
          </p>
        </div>
      </div>
      <div className="card-bottom">
        <p className="bottom-para">
          When the looks<br></br> matter – <br></br>we deliver the best
        </p>
        <div className="img-bottom">
          <img src={appleImg} alt=""></img>
        </div>
      </div>
    </>
  );
}

export default Card;
