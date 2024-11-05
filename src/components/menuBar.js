import { faBars, faBasketShopping,faFire, faTachographDigital, faTag, faLocationDot, faPercent} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const MenuBar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-none d-sm-block">
      <div className="container-fluid menu-bar px-4">
        <a href="#">
          لطفا شهر خود را انتخاب کنید
          <span>
            <FontAwesomeIcon icon={faLocationDot} size="lg" />
          </span>
        </a>

        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-3">
              <a href="#">!در دیجی‌کالا بفروشید</a>
            </li>
            <li className="nav-item px-3">
              <a href="#">سوالی دارید؟
                <span>|</span>
              </a>
            </li>
            <li className="nav-item px-3">
              <a href="#">تخفیف‌ها و پیشنهادها
                <span>
                  <FontAwesomeIcon icon={faTag} size="lg" />
                </span>
              </a>
            </li>
            <li className="nav-item px-3">
              <a href="#">پرفروش‌ترین‌ها
                <span>
                  <FontAwesomeIcon icon={faFire} size="lg" />
                </span>
              </a>
            </li>
            <li className="nav-item px-3">
              <a href="#">کارت هدیه
                <span>
                  <FontAwesomeIcon icon={faTachographDigital} size="lg" />
                </span>
              </a>
            </li>
            <li className="nav-item px-3">
              <a href="#">سوپرمارکت
                <span>
                  <FontAwesomeIcon icon={faBasketShopping} size="lg" />
                </span>
              </a>
            </li>
            <li className="nav-item px-3">
              <a href="#"> شگفت‌انگیزها
                <span>
                  <FontAwesomeIcon icon={faPercent} size="lg" />
                </span>
                <span>|</span>
              </a>
            </li>
            <li className="nav-item px-3 tittle-menu">
              <a href="#">
                <strong>دسته‌بندی کالاها</strong>
                <span>
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;