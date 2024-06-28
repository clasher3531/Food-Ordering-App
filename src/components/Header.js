import { useState, useContext, useEffect } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { userLoggedIn } = useContext(UserContext);
  function btnClickHandler() {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <div className="header">
      <img
        className="logo-img"
        width="90"
        height="90"
        src={LOGO_IMG}
        alt="food-bar"
      />
      <ul className="header-ul">
        <li className="header-li">
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </li>
        <li className="header-li">
          <Link to="/">Home</Link>
        </li>
        <li className="header-li">
          <Link to="/About">About Us</Link>
        </li>
        <li className="header-li">
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li className="header-li">
          <Link to="/cart">Cart ({cartItems.length} Items)</Link>
        </li>
        <li className="header-li">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="header-li">{userLoggedIn}</li>
        <button className="login" onClick={btnClickHandler}>
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
