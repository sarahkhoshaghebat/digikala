import "./storyBar.css";
import auctionHome from "../../images/story middle/Auction of the home.png";
import best from "../../images/story middle/best price.png";
import auctionMonth from "../../images/story middle/Auction of the month.png";
import clothes from "../../images/story middle/clothes.png";
import digital from "../../images/story middle/Digital.png";
import mehr from "../../images/story middle/mehr.png";
import receive from "../../images/story middle/Receive a loan.png";
import supermarket from "../../images/story middle/Supermarket.png";
import usedMobile from "../../images/story middle/Used mobile phone.png";

const StoryBarMiddle = () => {
  return (
    <div className="container icon-bar mt-4">
      <div className="icon-item">
        <a href="#">
          <svg
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#f0f0f0",
              borderRadius: "50%",
              padding: "10px",
              fill: "#888",
              display: "block",
              margin: "0 auto 10px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 20"
          >
            <circle cx="15" cy="10" r="8" />
            <circle cx="50" cy="10" r="8" />
            <circle cx="85" cy="10" r="8" />
          </svg>
          <p>بیشتر</p>
        </a>
      </div>

      <div className="icon-item">
        <a href="#">
          <img src={clothes} alt="لباس" />
          <p>حراج سرما پوشاک</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="#">
          <img src={mehr} alt="مهر" />
          <p>دیجی‌کالا مهر</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="#">
          <img src={auctionHome} alt="خانه" />
          <p>حراج خانه</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="#">
          <img src={usedMobile} alt="موبایل کارکرده" />
          <p>خرید موبایل‌کارکرده</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="">
          <img src={best} alt="بهترین قیمت" />
          <p>بهترین قیمت</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="#">
          <img src={digital} alt="دیجیتال" />
          <p>حراج دیجیتال</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="">
          <img src={auctionMonth} alt="حراج سر ماه" />
          <p>حراج سر ماه</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="#">
          <img src={receive} alt="دریافت وام" />
          <p>دریافت وام</p>
        </a>
      </div>
      <div className="icon-item">
        <a href="#">
          <img src={supermarket} alt="سوپرمارکت" />
          <p>سوپرمارکت دیجی‌کالا</p>
        </a>
      </div>
    </div>
  );
};

export default StoryBarMiddle;
