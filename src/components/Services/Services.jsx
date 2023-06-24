import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";
function Services() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="HeroContainer">
        <div className="heroText">
          <h1>Services</h1>
          <span>Home / Services</span>
        </div>
      </div>
    </>
  );
}

export default Services;
