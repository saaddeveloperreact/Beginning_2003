import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import restaurantData from "../utils/Menuinfo";
import { useParams } from "react-router";
import useRestaurantmenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantmenu(resId);

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
