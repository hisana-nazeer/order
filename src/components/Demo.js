import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch(
        // "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.876263999999999&lng=76.6218787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      console.log("Fetched Swiggy data:", json);

      // Dynamically find the restaurant list card
      // const restaurantCard = json?.data?.cards?.find(
      //   (card) =>
      //     card?.card?.card?.id === "restaurant_grid_listing" ||
      //     card?.card?.card?.id === "top_brands_for_you"
      // );
     setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants)
      // const restaurants =
      //   restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      //   [];

      // console.log("Extracted restaurants:", restaurants);

      // setListOfRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleTopRated = () => {
    const filteredList = resObj.filter((res) => res.Rating > 4);
    setListOfRestaurants(filteredList);
  };

  if (loading) {
    return (
      <div className="body">
        <h2>Loading restaurants...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="body">
        <h2>Failed to load restaurants. Try again later.</h2>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter-button" onClick={handleTopRated}>
        Top Rated Restaurants
      </div>

      <div className="restro-container">
        {listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard
              
              resData={restaurant}
            />
          ))
        ) : (
          <h3>No restaurants found</h3>
        )}
      </div>
    </div>
  );
};

export default Body;