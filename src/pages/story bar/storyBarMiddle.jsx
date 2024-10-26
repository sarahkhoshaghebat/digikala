import "./storyBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
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
          <svg className="icon-background"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="ellipsis"
            class="svg-inline--fa fa-ellipsis fa-xl "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"> 
            </path>
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
