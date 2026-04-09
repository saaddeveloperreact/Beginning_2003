"use client";

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";

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

  const userStatus = useUserStatus();

  if (userStatus === false)
    return (
      <h1 className="text-center text-red-500 font-semibold mt-10">
        Looks like you're offline. Please check your internet connection
      </h1>
    );

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-6 py-6 bg-gray-50 min-h-screen">
      {/* 🔍 Filters Section */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {/* Search */}
        <div className="flex items-center border rounded-lg overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            className="px-4 py-2 outline-none w-64"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
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

        {/* Top Rated */}
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          onClick={() => {
            const filtered = allRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated
        </button>

        {/* Reset */}
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          onClick={() => {
            setFilteredRestaurants(allRestaurants);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>

      {/* 🍽️ Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((res) => (
            <Link
              key={res?.info?.id}
              to={`/restaurant/${res.info.id}`}
              className="transform hover:scale-105 transition duration-200"
            >
              <RestaurantCard resData={res} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
