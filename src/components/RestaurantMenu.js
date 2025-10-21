import { useEffect } from "react"
const RestaurantMenu =() =>{
    
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.876263999999999&lng=76.6218787&restaurantId=515114&catalog_qa=undefined&submitAction=ENTER")
        const json=await data.json()
       
        
    }

    return(
        <div>
            <h1>Restaurant Menu Page</h1>
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu