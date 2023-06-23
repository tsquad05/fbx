import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

import "aos/dist/aos.css";

import image1 from "../../images/Apple14.jpg";
import image2 from "../../images/S22.jpg";
import image3 from "../../images/Blacka54.jpg";

import image4 from "../../images/person_1-min.jpg";

import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
};

function PopularItems() {
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
          <div className="testimonial-slider-wrap">
            <div className="testimonial-slider">
              <div className="item">
                <div className="testimonial">
                  <img
                    src={image4}
                    alt="pict"
                    className="img-fluid rounded-circle w-25 mb-4"
                  />
                  <div className="rate">
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                  </div>
                  <h3 className="h5 text-primary mb-4">Dave Daniel's</h3>
                  <blockquote>
                    <p>
                      &ldquo;The website is well-organized, allowing me to
                      filter and sort services based on my preferences. The
                      customer reviews and ratings helped me make informed
                      purchase decisions.&rdquo;
                    </p>
                  </blockquote>
                  <p className="text-black-50">Customer</p>
                </div>
              </div>

              <div className="item">
                <div className="testimonial">
                  <img
                    src={image4}
                    alt="pict"
                    className="img-fluid rounded-circle w-25 mb-4"
                  />
                  <div className="rate">
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                  </div>
                  <h3 className="h5 text-primary mb-4">Mike Houston</h3>
                  <blockquote>
                    <p>
                      &ldquo;I recently discovered FBX, and i am thrilled with
                      my purchase! The website's search functionality is
                      top-notch, allowing me to quickly find the exact product I
                      was looking for.&rdquo;
                    </p>
                  </blockquote>
                  <p className="text-black-50">Customer</p>
                </div>
              </div>

              <div className="item">
                <div className="testimonial">
                  <img
                    src={image4}
                    alt="pict"
                    className="img-fluid rounded-circle w-25 mb-4"
                  />
                  <div className="rate">
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                  </div>
                  <h3 className="h5 text-primary mb-4">Cameron Webster</h3>
                  <blockquote>
                    <p>
                      &ldquo;I just had an amazing experience shopping on FBX!
                      The website design is modern and visually appealing,
                      making it a pleasure to browse through the product
                      categories.&rdquo;
                    </p>
                  </blockquote>
                  <p className="text-black-50">Customer</p>
                </div>
              </div>

              <div className="item">
                <div className="testimonial">
                  <img
                    src="images/person_3-min.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle w-25 mb-4"
                  />
                  <div className="rate">
                    <span className="icon-star text-warning"></span>
                    <span className="icon-star text-warning"></span>
                  </div>
                  <h3 className="h5 text-primary mb-4">Dave Smith</h3>
                  <blockquote>
                    <p>
                      &ldquo;I am thoroughly impressed with FBX. The user
                      interface is incredibly intuitive, making it a breeze to
                      navigate and find exactly what I need.&rdquo;
                    </p>
                  </blockquote>
                  <p className="text-black-50">Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularItems;
