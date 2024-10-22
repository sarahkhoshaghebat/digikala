import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./storyBar.css";
import stories from "../../data/stories";

const StoryCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 14,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container mt-2">
      <div className="container mt-2">
        <Slider {...settings}>
          {stories.map((story) => (
            <div className="story" key={story.id}>
              <a href={`#story-${story.id}`} className="story-link">
                <div className="image-container">
                  <img src={story.imgSrc} alt={story.title} />
                </div>
                <p>{story.title}</p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StoryCarousel;
