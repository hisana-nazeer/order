import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {
  const category = data;
  

  if (!category) {
    console.log("No category data found");
    return null;
  }

  const { title, itemCards } = category;

  const handleClick=()=>{
   setShowIndex()
    console.log("clicl")
  }

  return (
    <div className="w-6/12 flex flex-col text-center mx-auto cursor-pointer my-4 bg-gray-100 shadow-lg p-2">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-semibold">
          {title} ({itemCards?.length || 0})
        </span>
        <span className="font-bold" >+</span>
      </div>

      { showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
//ONCE MORE, GO THRU THE CONCEPT, HOW IT IS DONE, ALSO EVEN AFTER WRITING THE CODE, ACCORDION IS NOT WORKING AS WE NEED, FIND OUT THE SOLUTION TOO