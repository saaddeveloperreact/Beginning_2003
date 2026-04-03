"use client";

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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

    setAllRestaurants(restaurants || []);
    setFilteredRestaurants(restaurants || []);
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* 🔍 Search Section */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              const filtered = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* ⭐ Top Rated Filter */}
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = allRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* 🔄 Reset Button */}
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(allRestaurants);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>

      {/* 🍽️ Restaurant Cards */}
      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((res) => (
            <RestaurantCard key={res?.info?.id} resData={res} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
