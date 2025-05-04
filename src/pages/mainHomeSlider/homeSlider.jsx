import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homeSlider.css";
import plus from "../../images/slider/plus.webp";
import pino from "../../images/slider/pino.webp";
import creativelyVideo from "../../images/slider/creatively video.webp";
import motorcycle from "../../images/slider/motorcycle.webp";
import bestPrice from "../../images/slider/best price.gif";
import climbing from "../../images/slider/Climbing.webp";
import promate from "../../images/slider/promate.webp";
import respi from "../../images/slider/Respi.gif";
import shoes from "../../images/slider/shoes.webp";
import week from "../../images/slider/week.webp";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className=" home-slider">
      <Slider {...settings}>
        <div className="slide slide1">
          <a href="#">
            <img className="imgSlider" src={plus} alt="Slide 1" />
          </a>
        </div>
        <div className="slide slide2">
          <a href="#">
            <img className="imgSlider" src={pino} alt="Slide 2" />
          </a>
        </div>
        <div className="slide slide3">
          <a href="#">
            <img className="imgSlider" src={creativelyVideo} alt="Slide 3" />
          </a>
        </div>
        <div className="slide slide4">
          <a href="#">
            <img className="imgSlider" src={motorcycle} alt="Slide 4" />
          </a>
        </div>
        <div className="slide slide5">
          <a href="#">
            <img className="imgSlider" src={bestPrice} alt="Slide 5" />
          </a>
        </div>
        <div className="slide slide6">
          <a href="#">
            <img className="imgSlider" src={climbing} alt="Slide 6" />
          </a>
        </div>
        <div className="slide slide7">
          <a href="#">
            <img className="imgSlider" src={promate} alt="Slide 7" />
          </a>
        </div>
        <div className="slide slide8">
          <a href="#">
            <img className="imgSlider" src={respi} alt="Slide 8" />
          </a>
        </div>
        <div className="slide slide9">
          <a href="#">
            <img className="imgSlider" src={shoes} alt="Slide 9" />
          </a>
        </div>
        <div className="slide slide10">
          <a href="#">
            <img className="imgSlider" src={week} alt="Slide 10" />
          </a>
        </div>

        
      </Slider>
    </div>
  );
};

export default HomeSlider;
