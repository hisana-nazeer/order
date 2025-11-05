

import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import React, { useEffect, useState} from "react";
import Shimmer from "./Shimmer";

//

const Body=()=>{

 const [listOfRestaurants,setListOfRestaurants]=useState([]);
 const [searchText,setSearchText]=useState("");
 const [filteredRestaurants,setFilteredRestaurants]=useState([]);
 useEffect(()=>{
    fetchData()
},[])

const fetchData=async()=>{
   
   
 
   //  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.876263999999999&lng=76.6218787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const data= await fetch("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api")
  const json= await data.json();
  console.log(json);
//    const restaurantCard = data?.cards?.find(card => card?.card?.card?.id === "restaurant_grid_listing_v2");

//  setListOfRestaurants(restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);

    setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    console.log(listOfRestaurants)
    console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]);
  }
  const onClickHandler=()=>{
    console.log(searchText);
    const filteredRestaurant=listOfRestaurants.filter
    ((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredRestaurants(filteredRestaurant);

    setSearchText("");
  }
    
if(listOfRestaurants.length===0){
  return <Shimmer />
}


  return listOfRestaurants.length===0?<Shimmer />:(
    <div className='body'>
      <div className="top-bar">
      <div>
        <button className='search-button' onClick={onClickHandler}>
        Search</button>
        <input
        type="text"
        className='search-input'
        placeholder='Search'
        value={searchText}
        onChange={(e)=>{setSearchText(e.target.value)
       
        }}
        />
      </div>
      <div 
      className='filter-button'
      onClick={()=>{
        const filteredList=resObj.filter((res)=>res.Rating>4)
        setListOfRestaurants(filteredList);
      }}
      >Top rated Restaurants</div>
      </div>
      <div className='restro-container'>
        
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
               key={restaurant.info.id}
              resData={restaurant}
            />
          ))}
       
        {/* <RestaurantCard
            resName="KFC"
            cuisine="Fast Food, Beverages"
        /> */}
        
        </div>
        
        
      </div>
  )
}
export default Body;
