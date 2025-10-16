import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import React, { useState} from "react";




const Body=()=>{

 const [listOfRestaurants,setListOfRestaurants]=useState(resObj);

  return(
    <div className='body'>
      <div 
      className='filter-button'
      onClick={()=>{
        const filteredList=resObj.filter((res)=>res.Rating>4)
        setListOfRestaurants(filteredList);
      }}
      >Top rated Restaurants</div>
      <div className='restro-container'>
        {listOfRestaurants.map((restaurant)=>(
          <RestaurantCard key={restaurant.id}
            resData= {restaurant}
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