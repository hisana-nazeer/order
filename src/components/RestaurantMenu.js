import React, { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";
const RestaurantMenu =() =>{

    const [resInfo, setResInfo] = useState(null);
     
    const info = resInfo?.cards[2]?.card?.card?.info || {}
    const {name,cloudinaryImageId,locality,costForTwoMessage, cuisines, avgRating}= info

    const itemCards = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards || []
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const[showIndex, setShowIndex]=useState(null)

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
   

   
   
  //   return(
  //       <div>
            
  //           <h2 className="font-bold my-6  text-center  text-2xl ">{name}</h2>
  //           <p className="font-medium text-center text-lg">{cuisines.join(", ")} · {costForTwoMessage} · ⭐{avgRating}</p>

  //           {itemCards.map((cat, idx) => {
  //             const title = cat?.card?.card?.title || 'Category';
              
  //             const items = cat?.card?.card?.itemCards || [];
  //             return (
  //               <div key={idx}>
  //                 <h2>{title}</h2>
  //                 <ul>
  //                   {items.map((item, i) => {
  //                     const info = item?.card?.info || item?.card?.card?.info || {};
  //                     const id = info.id ?? i;
  //                     const price = info.price ?? info.defaultPrice ?? 0;
  //                     return (
  //                       <li key={id}>
  //                         <h3>{info.name}</h3>
  //                         {info.description && <p>{info.description}</p>}
  //                         <p>Price: ₹{price / 100}</p>
  //                       </li>
  //                     );
  //                   })}
  //                 </ul>
  //               </div>
  //             );data = {itemCard?.card?.card?.title}
  //           })}
    return(
      <div>
           <h2 className="font-bold my-6  text-center  text-2xl ">{name}</h2>
          <p className="font-medium text-center text-lg">
            {cuisines.join(", ")} · {costForTwoMessage} · ⭐{avgRating}</p>
          
          {itemCards.map((itemCard, index)=>(
            <RestaurantCategory  
            data={itemCard?.card?.card} 
            //showItems={index=== showIndex}
            showItems={index===showIndex?true:false}
            setShowIndex ={()=>setShowIndex(index)}
            />

))}

</div>
)

 
};
          

export default RestaurantMenu