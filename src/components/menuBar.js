import { faBars, faBasketShopping,faFire, faTachographDigital, faTag, faLocationDot, faPercent} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBar = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row ">
        <div className="col-4 menu-bar">
          <a href="#">لطفا شهر خود را انتخاب کنید
            <span>
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
            </span>
          </a>
        </div>
        <div className="col-1 menu-bar">
          <a href="#">!در دیجی‌کالا بفروشید</a>
        </div>
        <div className="col-1 menu-bar">
          <a href="#">سوالی دارید؟
          <span>|</span>
          </a>

        </div>
        <div className="col-1 menu-bar">
          <a href="#">تخفیف‌ها و پیشنهادها
            <span>
                <FontAwesomeIcon icon={faTag} size="lg" />
            </span>
          </a>
        </div>
        <div className="col-1 menu-bar">
          <a href="#">پرفروش‌ترین‌ها
            <span>
            <FontAwesomeIcon icon={faFire} size="lg" />
            </span>
          </a>
        </div>
        <div className="col-1 menu-bar">
          <a href="#">کارت هدیه
            <span>
            <FontAwesomeIcon icon={faTachographDigital} size="lg" />
            </span>
          </a>
        </div>
        <div className="col-1 menu-bar">
          <a href="#">سوپرمارکت
            <span>
            <FontAwesomeIcon icon={faBasketShopping} size="lg" />
            </span>
          </a>
        </div>
        <div className="col-1 menu-bar">
          <a href="#">شگفت‌انگیزها
            <span>
            <FontAwesomeIcon icon={faPercent} size="lg" />
            </span>
          </a>
        </div>
        <div className="col-1 tittle-menu">
          <a href="#">
            <span>دسته‌بندی کالاها
            </span>
            <span>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
