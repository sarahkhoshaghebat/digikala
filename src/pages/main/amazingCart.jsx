import "./amazingCart.css"
const AmazingCart = () => {
  return (
    <div class="container containerAmazing">
      <div class="products">
        <div class="product">
          <img src="product1.jpg" alt="Product 1" />
          <p>دریل پیچ گوشتی شارژی</p>
          <p>
            تومان 1,745,000 <span class="discount">40%</span>
          </p>
        </div>
        <div class="product">
          <img src="product2.jpg" alt="Product 2" />
          <p>هواپز نیکووا</p>
          <p>
            تومان 8,999,000 <span class="discount">50%</span>
          </p>
        </div>
        <div class="product">
          <img src="product3.jpg" alt="Product 3" />
          <p>ادوپرفیوم مردانه</p>
          <p>
            تومان 3,240,000 <span class="discount">26%</span>
          </p>
        </div>
        <div class="product">
          <img src="product4.jpg" alt="Product 4" />
          <p>اسپیکر بلوتوثی</p>
          <p>
            تومان 2,349,000 <span class="discount">43%</span>
          </p>
        </div>
        <div class="product">
          <img src="product5.jpg" alt="Product 5" />
          <p>قرص پرگنت بیوتی</p>
          <p>
            تومان 117,000 <span class="discount">78%</span>
          </p>
        </div>
      </div>
      <div class="offer">
        <h2>پیشنهاد شگفت‌انگیز</h2>
        <div class="timer">
          <span>16</span> : <span>09</span> : <span>10</span>
        </div>
        <p>مشاهده همه</p>
      </div>
    </div>
  );
};

export default AmazingCart;
