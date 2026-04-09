import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  const userStatus = useUserStatus();

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-28 object-contain" src={LOGO_URL} alt="logo" />
      </div>

      {/* Nav Items */}
      <div className="flex items-center gap-8">
        <span className="text-sm font-medium">
          Status:
          <span
            className={`ml-1 font-semibold ${
              userStatus ? "text-green-600" : "text-red-500"
            }`}
          >
            {userStatus ? "Online" : "Offline"}
          </span>
        </span>

        <Link to="/" className="hover:text-blue-600 font-medium">
          Home
        </Link>

        <Link to="/about" className="hover:text-blue-600 font-medium">
          About
        </Link>

        <Link to="/contact" className="hover:text-blue-600 font-medium">
          Contact
        </Link>

        <Link to="/cart" className="hover:text-blue-600 font-medium">
          Cart
        </Link>

        {/* Button */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          onClick={() => {
            btnname === "Login" ? setbtnname("Logout") : setbtnname("Login");
          }}
        >
          {btnname}
        </button>
      </div>
    </div>
  );
};

export default Header;
