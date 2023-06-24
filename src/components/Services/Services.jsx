import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import Requests from "./Requests.js";
function Services() {
  let RequestSlider = Requests.map((req) => {
    return (
      <div key={req.id} className="sliderContainer">
        <div className="thumbnailCon">
          <img src={req.thumbnail} alt="ThumbNail" />
        </div>
        <div className="sellerDetails">
          <img src={req.avatar} alt="Avatar" />
          <span>{req.userName}</span>
          <span className="rating">
            {typeof req.rating === "number"
              ? "Level" + req.rating
              : "Top Rated"}
          </span>
        </div>
        <div className="details">{req.details}</div>
        <button>See Details</button>
      </div>
    );
  });
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="HeroContainer">
        <div className="heroText">
          <h1>Services</h1>
          <span>
            <Link to="/">Home</Link> / <span>Services</span>
          </span>
        </div>
      </div>
      <div className="featuredProperties">
        <div className="featuredProperties"></div>
        <h2>Featured Properties</h2>
        <div className="requestContainer">{RequestSlider}</div>
      </div>
    </>
  );
}

export default Services;
