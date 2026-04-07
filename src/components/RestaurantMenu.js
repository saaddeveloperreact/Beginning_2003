import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import restaurantData from "../utils/Menuinfo";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

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

  if (!resInfo) return <Shimmer />;

  const info = resInfo.info;

  return (
    <div className="Menu-Info">
      <h1>{info.name}</h1>
      <h2>{info.cuisines.join(", ")}</h2>
      <h2>{info.costForTwo}</h2>

      <h3>⭐ {info.avgRating}</h3>
      <h3>⏱ {info.sla.deliveryTime} mins</h3>

      <h2>Recommended</h2>
      {resInfo.recommended.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
