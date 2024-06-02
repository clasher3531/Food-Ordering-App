import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  function btnClickHandler() {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }
  return (
    <div className="header">
      <img
        className="logo-img"
        width="90"
        height="90"
        src={LOGO_IMG}
        alt="food-bar"
      />
      <div className="company-name">Namaste Food</div>
      <ul className="header-ul">
        <li className="header-li">Home</li>
        <li className="header-li">Services</li>
        <li className="header-li">Contact Us</li>
        <li className="header-li">Food</li>
        <button className="login" onClick={btnClickHandler}>
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
