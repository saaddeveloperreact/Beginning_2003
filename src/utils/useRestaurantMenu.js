import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const RestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(MENU_API_URL + resId);

      const text = await res.text(); // safer first

      if (!text) {
        console.log("Empty response");
        return;
      }

      const json = JSON.parse(text);
      console.log(json);
    } catch (err) {
      console.error("Error:", err);
    }
  };
};

export default RestaurantMenu;
