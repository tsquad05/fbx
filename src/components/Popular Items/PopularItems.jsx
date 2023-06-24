import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import Testimonies from "./Testimonials";
import "./PopularItems.css";
import { Carousel } from "react-bootstrap";

import "aos/dist/aos.css";

import image1 from "../../images/Apple14.jpg";
import image2 from "../../images/S22.jpg";
import image3 from "../../images/Blacka54.jpg";

import Cart from "../../images/Chat.jpeg";
import "./style.css";

function PopularItems() {
  let Testimon = Testimonies.map((testimony) => {
    return (
      <Carousel.Item>
        <div key={testimony.id} className="slider--container--item">
          <img
            src={testimony.img}
            alt="Testifiers avatar"
            className="profilePic"
          />
          <span className="slider--container--item--name">
            {testimony.Name}
          </span>
          <q>{testimony.details}</q>
          <span className="slider--container--item--role">
            {testimony.role}
          </span>
        </div>
      </Carousel.Item>
    );
  });
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section className="features-1">
        <div className="container">
          <div className="row">
            <h2 className="font-weight-bold text-primary heading">
              Popular Items
            </h2>
            <div
              className="col-5 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="box-feature">
                <img alt="Iphone 14" src={image1} />
                <h3 className="mb-3">Iphone 14 Pro Max</h3>
                <p>
                  Iphone 14 Pro Max 6.7" <br />
                  256GB Nano Sim - Deep Purple
                </p>
                <p>
                  <Link to="#" className="learn-more">
                    Buy Now
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="col-5 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="box-feature">
                <img alt="S22" src={image2} />
                <h3 className="mb-3">Galaxy S22 Ultra</h3>
                <p>
                  Galaxy s22 Ultra - 6.8" <br />
                  (12GB RAM, 256GB ROM)
                </p>
                <p>
                  <Link to="#" className="learn-more">
                    Buy Now
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box-feature">
                <img alt="A54" src="images/Blacka54.jpg" height="300" />
                <h3 className="mb-3">Samsung Galaxy A54 5G</h3>
                <p>
                  Samsung Galaxy A54 5G - 6.4" <br />
                  Amoled - 256GB ROM - 8GB RAM
                </p>
                <p>
                  <Link to="#" className="learn-more">
                    Buy Now
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="box-feature">
                <img alt="S21" src={image3} />
                <h3 className="mb-3">Galaxy S21</h3>
                <p>
                  Samsung Galaxy S21 5G <br />
                  128GB ROM - 8GB RAM
                </p>
                <p>
                  <Link to="#" className="learn-more">
                    Buy Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section sec-testimonials">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
                Customer Says
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <div id="testimonial-nav">
                <span className="prev" data-controls="prev">
                  Prev
                </span>

                <span className="next" data-controls="next">
                  Next
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4"></div>
          </div>
          <div className="slider--container">
            <Carousel data-bs-theme="dark">{Testimon}</Carousel>
          </div>
        </div>
      </div>

      <div className="section section-4 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-5">
              <h2 className="font-weight-bold heading text-primary mb-4">
                The best part? Everything
              </h2>
              <p className="text-black-50">
                Stick to your budget, find the right services and product around
                you. No hidden fees, just project-based pricing.
              </p>
            </div>
          </div>
          <div className="row justify-content-between mb-5">
            <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
              <div className="img-about dots">
                <img src={Cart} alt="Cart" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-home2"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Top Products</h3>
                  <p className="text-black-50">
                    Top products and services made specifically just for you.
                  </p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-person"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Top Services</h3>
                  <p className="text-black-50">
                    Discover incredible services around you.
                  </p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-security"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Legit Businesses</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row section-counter mt-5">
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">3298</span>
                </span>
                <span className="caption text-black-50"># of Products</span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">2181</span>
                </span>
                <span className="caption text-black-50"># of Services</span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">5479</span>
                </span>
                <span className="caption text-black-50">
                  # of All Products and Services
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">518</span>
                </span>
                <span className="caption text-black-50"># of Agents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularItems;
