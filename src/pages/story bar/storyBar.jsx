import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "../../images/slider.jpg";
import sunSkin5 from "../../images/5 sun skin.jpg";
import sunSkin from "../../images/sun skin.jpg";
import coffee from "../../images/coffee.jpg";
import mag from "../../images/mag.jpg";
import phon from "../../images/phon.jpg";
import pixel from "../../images/pixel.jpg";
import hand from "../../images/hand.jpg";
import adventure from "../../images/Adventure.jpg";
import chocolate from "../../images/chocolate.jpg";
import forWork from "../../images/for work.jpg";
import none from "../../images/none.jpg";
import tree from "../../images/tree.jpg";
import "./storyBar.css";

const stories = [
  { id: 1, title: "5 تا ضدآفتاب", imgSrc: sunSkin5 },
  { id: 2, title: "ضدآفتاب اقتصادی", imgSrc: sunSkin },
  { id: 3, title: " حرفه ای ها با چی فیلم میگیرند ؟ ", imgSrc: slider },
  { id: 4, title: "تو سفر با چی قهوه میخوری ؟", imgSrc: mag },
  { id: 5, title: "قهوه خوب باید چه جوری باشه ؟ ", imgSrc: coffee },
  { id: 7, title: "بهترین پرچمدار بازار؟ ", imgSrc: phon },
  { id: 8, title: "گل یا پوچ؟", imgSrc: none },
  { id: 9, title: "اسب آبی شکلاتی😍🍫 ", imgSrc: chocolate },
  { id: 10, title: "غول گوگل پیکسل! ", imgSrc: pixel },
  { id: 11, title: "ماجراجویی تو فضا💥 ", imgSrc: adventure },
  { id: 12, title: "آقای دست جان! ", imgSrc: hand },
  { id: 13, title: "🍒tree ", imgSrc: tree },
  { id: 14, title: "واسه چه کاریه ", imgSrc: forWork },
];

const StoryCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 14,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,  // برای صفحه نمایش‌های بزرگ
        settings: {
          slidesToShow: 6,   // نمایش 6 اسلاید
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,  // برای تبلت‌ها و لپ‌تاپ‌های کوچک
        settings: {
          slidesToShow: 4,   // نمایش 4 اسلاید
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,   // برای تبلت‌ها
        settings: {
          slidesToShow: 4,   // نمایش 3 اسلاید
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,   // برای گوشی‌های موبایل بزرگ
        settings: {
          slidesToShow: 4,   // نمایش 2 اسلاید
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,   // برای گوشی‌های موبایل کوچک
        settings: {
          slidesToShow: 4,   // نمایش 1 اسلاید
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
