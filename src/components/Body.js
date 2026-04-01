"use client";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//const [ListofRestaurants, setListofRestaurants] = useState(resObj);
const Body = () => {
  const [ListofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.305163&lng=76.65517489999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    const restaurants = json?.data?.cards
      ?.map((c) => c?.card?.card)
      ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)?.gridElements
      ?.infoWithStyle?.restaurants;

    setListofRestaurants(restaurants || []);
  };

  if (ListofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListofRestaurants(
              ListofRestaurants.filter((res) => res.info.avgRating < 4.5),
            );
          }}
        ></button>
      </div>

      <div className="res-container">
        {ListofRestaurants.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
