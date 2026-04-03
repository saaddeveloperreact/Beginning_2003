import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
/* Header Component */
const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn"
            onClick={() => {
              btnname === "Login" ? setbtnname("Logout") : setbtnname("Login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
