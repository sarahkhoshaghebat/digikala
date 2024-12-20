import "./amazingCart.css";
import eaude from "../../images/main/Eau de Parfum.webp";
import nikova from "../../images/main/nikova.webp";
import pergent from "../../images/main/Pergent Beauty Pills.webp";
import speaker from "../../images/main/speaker.webp";
import rechageble from "../../images/main/Rechargeable screwdriver drill.webp";
import React, { useState, useEffect } from "react";

const AmazingCart = () => {
  const [time, setTime] = useState({
    hours: 18,
    minutes: 9,
    seconds: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container containerAmazing">
      <div className="products">
        <a href="/">
          <div className="product">
            <svg
              className="flash"
              width="52px"
              height="52px"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="#00bcd4"
                strokeWidth="4"
                fill="none"
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52 40 L42 50 L52 60 M42 50 L67 50"
                stroke="#00bcd4"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>مشاهده همه</p>
          </div>
        </a>
        <a href="/">
          <div className="product">
            <img src={rechageble} alt="Product 1" />
            <p>دریل پیچ گوشتی شارژی</p>
            <p>
              تومان 1,745,000 <span className="discount">40%</span>
            </p>
          </div>
        </a>
        <a href="/">
          <div className="product">
            <img src={nikova} alt="Product 2" />
            <p>هواپز نیکووا</p>
            <p>
              تومان 8,999,000 <br />
              <span className="discount">50%</span>
            </p>
          </div>
        </a>
        <a href="/">
          <div className="product">
            <img src={eaude} alt="Product 3" />
            <p>ادوپرفیوم مردانه</p>
            <p>
              تومان 3,240,000 <span className="discount">26%</span>
            </p>
          </div>
        </a>
        <a href="/">
          <div className="product">
            <img src={speaker} alt="Product 4" />
            <p>اسپیکر بلوتوثی</p>
            <p>
              تومان 2,349,000 <span className="discount">43%</span>
            </p>
          </div>
        </a>
        <a href="/">
          <div className="product">
            <img src={pergent} alt="Product 5" />
            <p>قرص پرگنت بیوتی</p>
            <p>
              تومان 117,000 <span className="discount">78%</span>
            </p>
          </div>
        </a>
      </div>
      <div className="offer p-3">
        <h4>پیشنهاد شگفت‌انگیز</h4>
        <div className="timer mt-4">
          <span>{String(time.hours).padStart(2, "0")}</span> :
          <span>{String(time.minutes).padStart(2, "0")}</span> :
          <span>{String(time.seconds).padStart(2, "0")}</span>
        </div>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.2086 66.6112C34.1483 66.6112 28.286 65.382 22.7825 62.9582C17.4681 60.6184 12.7435 57.282 8.73926 53.0422L13.1577 48.8699C20.2611 56.392 29.8679 60.5343 40.2086 60.5343C50.5493 60.5343 59.8545 56.5166 66.9249 49.2211L71.2893 53.4504C63.0632 61.9376 52.0246 66.6112 40.2086 66.6112Z"
            fill="#FAFAFA"
          />
          <path
            d="M53.1453 50.1636C49.6664 50.1636 46.3841 48.037 45.0874 44.5941C43.4169 40.1561 45.6682 35.1869 50.1046 33.5164C54.5426 31.846 59.5118 34.0973 61.1837 38.5352C62.8542 42.9732 60.6029 47.9424 56.1665 49.6128C55.1714 49.988 54.1509 50.1636 53.1453 50.1636ZM52.2463 39.2016C50.9451 39.6923 50.2832 41.1496 50.774 42.4524C51.2648 43.7551 52.7221 44.4155 54.0248 43.9247C55.326 43.4339 55.9879 41.9766 55.4971 40.6754C55.0063 39.3727 53.549 38.7108 52.2463 39.2016Z"
            fill="#FAFAFA"
          />
          <path
            d="M49.4717 13.3898L25.5627 48.4129L30.5815 51.8391L54.4906 16.816L49.4717 13.3898Z"
            fill="#FAFAFA"
          />
          <path
            d="M26.9147 32.271C25.7065 32.271 24.5029 32.0128 23.3712 31.501C21.2791 30.5525 19.6807 28.8476 18.8718 26.6969C18.0628 24.5477 18.1379 22.2109 19.0864 20.1188C20.0349 18.0266 21.7398 16.4282 23.8905 15.6193C26.0397 14.8103 28.3765 14.8854 30.4687 15.8339C32.5608 16.7824 34.1592 18.4874 34.9681 20.638C36.6386 25.076 34.3873 30.0452 29.9494 31.7172C28.9633 32.0879 27.9383 32.274 26.9147 32.274V32.271ZM26.9207 21.1423C26.6205 21.1423 26.3204 21.1963 26.0307 21.3059C25.4004 21.543 24.8991 22.0128 24.6214 22.6266C24.3438 23.2405 24.3213 23.9264 24.5584 24.5567C24.7955 25.187 25.2653 25.6883 25.8791 25.966C26.493 26.2436 27.1788 26.2661 27.8092 26.029C29.1119 25.5382 29.7723 24.0809 29.2815 22.7782C29.0444 22.1479 28.5746 21.6466 27.9608 21.3689C27.6291 21.2189 27.2749 21.1423 26.9207 21.1423Z"
            fill="#FAFAFA"
          />
        </svg>
        <div>
          <a href="#">
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            مشاهده همه
          </a>
        </div>
      </div>
    </div>
  );
};

export default AmazingCart;
