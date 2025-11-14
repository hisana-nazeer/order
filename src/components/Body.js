

import RestaurantCard, { withPromotedLabel} from "./RestaurantCard";
import resObj from "../utils/mockData";
import React, { useContext, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


//

const Body=()=>{

 const [listOfRestaurants,setListOfRestaurants]=useState([]);
 const [searchText,setSearchText]=useState("");
 const [filteredRestaurants,setFilteredRestaurants]=useState([]);

 const restaurantCardPromoted = withPromotedLabel(RestaurantCard)

const { loggedInUser,setUserName} =useContext(UserContext)

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
  const onlineStatus=useOnlineStatus();
  if (onlineStatus===false){
    return <h1>🔴 Offline, Please check your internet connection!!</h1>
  }  
 

if(listOfRestaurants.length===0){
  return <Shimmer />
}


  return listOfRestaurants.length===0?<Shimmer />:(
    <div className='body'>
      <div className="flex ">
      <div>
        <button className='m-4 px-2 py-2 rounded-lg bg-gray-100 ' onClick={onClickHandler}>
        Search</button>
        <input
        type="text"
        className='p-2 rounded-lg border border-gray-300'
        placeholder='Search here'
        value={searchText}
        onChange={(e)=>{setSearchText(e.target.value)
       
        }}
        />
      </div>
      <div 
      className=' p-2 m-4 bg-gray-50 cursor-pointer rounded-lg'
      onClick={()=>{
        const filteredList=resObj.filter((res)=>res.Rating>4)
        setListOfRestaurants(filteredList);
      }}
      >Top rated Restaurants</div>
      </div>
      <div className="search m-4 p-4 flex iteme-center">
        <label>UserName</label>
        <input className="border border-black p-2" onChange={(e)=>setUserName(e.target.value)}
          value={loggedInUser}
        >
        </input>
      </div>
      <div className='flex flex-wrap '>
        
          {filteredRestaurants.map((restaurant) => (
            
            <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
              {restaurant.info.promoted ?( <restaurantCardPromoted
              resData={restaurant}
            />) :(

            <RestaurantCard
              resData={restaurant}
            />)}</Link>
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
