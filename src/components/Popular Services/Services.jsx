import "./Services.css";
import "./SwiperStyles.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/effect-coverFlow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import Slider_Image from "../../images/Programming.jpg";
import Slider_Image2 from "../../images/Gaming.jpg";
import Slider_Image3 from "../../images/Design.jpg";
import Slider_Image4 from "../../images/Makeup.jpg";
import Slider_Image5 from "../../images/Cap.jpg";
import Slider_Image6 from "../../images/Shoe2.jpg";
import Slider_Image7 from "../../images/Bot.jpg";

function Services() {
  return (
    <>
      <section className="services container">
        <section className="servicesHeader">
          <h3>Popular Services</h3>
          <button className="btn services--explore">Explore More</button>
        </section>
        <div className="swipeContainer">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={50}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={Slider_Image} alt="slide_image" />
              <div className="sliderDetails">
                <p>Discover Skilled Freelancers</p>
                <h2>Programming</h2>
                <button>Discover More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider_Image2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider_Image3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider_Image4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider_Image5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider_Image6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider_Image7} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <button>prev</button>
              </div>
              <div className="swiper-button-next slider-arrow">
                <button>next</button>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Services;
