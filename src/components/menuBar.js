import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBar = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col">
          <a href="#">لطفا شهر خود را انتخاب کنید</a>
        </div>
        <div className="col">
          <a href="#">در دیجی‌کالا بفروشید!</a>
        </div>
        <div className="col">
          <a href="#">سوالی دارید؟</a>
        </div>
        <div className="col">
          <a href="#">تخفیف‌ها و پیشنهادها</a>
        </div>
        <div className="col">
          <a href="#">پرفروش‌ترین‌ها</a>
        </div>
        <div className="col">
          <a href="#">کارت هدیه</a>
        </div>
        <div className="col">
          <a href="#">سوپرمارکت</a>
        </div>
        <div className="col">
          <a href="#">شگفت‌انگیزها</a>
        </div>
        <div className="col">
          <a href="#">
            دسته‌بندی کالاها
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
