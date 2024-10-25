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
        <img src="/" alt="بیشتر" />
        <p>بیشتر</p>
      </div>
      <div className="icon-item">
        <img src={clothes} alt="لباس" />
        <p>حراج سرما پوشاک</p>
      </div>
      <div className="icon-item">
        <img src={mehr} alt="مهر" />
        <p>دیجی‌کالا مهر</p>
      </div>
      <div className="icon-item">
        <img src={auctionHome} alt="خانه" />
        <p>حراج خانه</p>
      </div>
      <div className="icon-item">
        <img src={usedMobile} alt="موبایل کارکرده" />
        <p>خرید موبایل‌کارکرده</p>
      </div>
      <div className="icon-item">
        <img src={best} alt="بهترین قیمت" />
        <p>بهترین قیمت</p>
      </div>
      <div className="icon-item">
        <img src={digital} alt="دیجیتال" />
        <p>حراج دیجیتال</p>
      </div>
      <div className="icon-item">
        <img src={auctionMonth} alt="حراج سر ماه" />
        <p>حراج سر ماه</p>
      </div>
      <div className="icon-item">
        <img src={receive} alt="دریافت وام" />
        <p>دریافت وام</p>
      </div>
      <div className="icon-item">
        <img src={supermarket} alt="سوپرمارکت" />
        <p>سوپرمارکت دیجی‌کالا</p>
      </div>
    </div>
  );
};

export default StoryBarMiddle;
