import { faBars, faBasketShopping,faFire, faTachographDigital, faTag, faLocationDot, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBar = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col">
          <a href="#">لطفا شهر خود را انتخاب کنید
            <span>
            <FontAwesomeIcon icon={faLocationDot} size="sm" />
            </span>
          </a>
        </div>
        <div className="col">
          <a href="#">!در دیجی‌کالا بفروشید</a>
        </div>
        <div className="col">
          <a href="#">سوالی دارید؟</a>
        </div>
        <div className="col">
          <a href="#">تخفیف‌ها و پیشنهادها
            <span>
                <FontAwesomeIcon icon={faTag} size="sm" />
            </span>
          </a>
        </div>
        <div className="col">
          <a href="#">پرفروش‌ترین‌ها
            <span>
            <FontAwesomeIcon icon={faFire} size="sm" />
            </span>
          </a>
        </div>
        <div className="col">
          <a href="#">کارت هدیه
            <span>
            <FontAwesomeIcon icon={faTachographDigital} size="sm" />
            </span>
          </a>
        </div>
        <div className="col">
          <a href="#">سوپرمارکت
            <span>
            <FontAwesomeIcon icon={faBasketShopping} size="sm" />
            </span>
          </a>
        </div>
        <div className="col">
          <a href="#">شگفت‌انگیزها
            <sapan>
            <FontAwesomeIcon icon={faPercent} size="sm" />
            </sapan>
          </a>
        </div>
        <div className="col">
          <a href="#">
            <span>دسته‌بندی کالاها
            </span>
            <span>
              <FontAwesomeIcon icon={faBars} size="sm" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
