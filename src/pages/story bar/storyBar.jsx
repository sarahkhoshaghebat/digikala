import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider from "../../images/slider.jpg";
import sunSkin5 from"../../images/5 sun skin.jpg"
import sunSkin from"../../images/sun skin.jpg"
import coffee from"../../images/coffee.jpg"
import mag from"../../images/mag.jpg"


import "./storyBar.css";

const stories = [
  { id: 1, title: '5 تا ضدآفتاب', imgSrc: sunSkin5 },
  { id: 2, title: 'ضدآفتاب اقتصادی', imgSrc: sunSkin },
  { id: 3, title: 'باز 2 پرو یا 3 پرو؟', imgSrc: slider },
  { id: 4, title: 'با یه قاب + گوشی', imgSrc: coffee },
  { id: 4, title: 'با یه قاب + گوشی', imgSrc: mag },

];

const StoryCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container story-carousel">
      <Slider {...settings}>
        {stories.map((story) => (
          <div key={story.id} className="story">
            <img src={story.imgSrc} alt={story.title} />
            <p>{story.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StoryCarousel;
