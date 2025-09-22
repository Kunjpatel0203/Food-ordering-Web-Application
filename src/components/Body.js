import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  // Fetch Swiggy data
  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurantList(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Search restaurants
  const handleSearch = () => {
    if (!searchRestaurant.trim()) {
      // If search box is empty, show all
      setFilteredRestaurants(restaurantList);
      return;
    }

    const filtered = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
    );

    setFilteredRestaurants(filtered);
    setRestaurantName(searchRestaurant);
  };

  // Conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
          placeholder="Search a restaurant you want..."
        />
        <button className="search" onClick={handleSearch}>
          Search
        </button>
        <button
          className="top-rated"
          onClick={() => {
            const topRated = restaurantList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(topRated);
          }}
        >
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="restaurant-container">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              {...restaurant?.info}
            />
          ))
        ) : (
          <h2>
            Sorry, we couldn't find any restaurant for "{restaurantName}"
          </h2>
        )}
      </div>
    </div>
  );
};

export default Body;
