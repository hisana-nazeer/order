import React, { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu =() =>{

    const [resInfo, setResInfo] = useState(null);
     
    const info = resInfo?.cards[2]?.card?.card?.info || {}
    const {name,cloudinaryImageId,locality,costForTwoMessage, cuisines, avgRating}= info

    const itemCards = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards || []
    
    useEffect(()=>{
        fetchMenu()
    },[])

    
    const fetchMenu=async()=>{
         //const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.876263999999999&lng=76.6218787&restaurantId=515114&catalog_qa=undefined&submitAction=ENTER")
        const data= await fetch("https://namastedev.com/api/v1/listRestaurantMenu/123456")
        
        const json=await data.json()
        console.log(json)
        setResInfo(json.data)
       
        
    }
    if (resInfo === null) 
        return <Shimmer/>
   

   
   
    return(
        <div>
            <h1>Restaurant Menu Page</h1>
            <ul>
                
<li>{itemCards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.name || "No item name"}</li>


                <li>{name}</li>
                <li>{cloudinaryImageId}</li>
                <li>{locality}</li>
                <li><p>{cuisines.join(",")}</p></li>
                <li>{avgRating}</li>
            </ul>
        </div>
   )
}

export default RestaurantMenu