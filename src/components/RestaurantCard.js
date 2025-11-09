
import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId,imageId, locality,areaName, costForTwo,avgRating } = resData?.info || {};
  const imageUrl = `${CDN_URL}${cloudinaryImageId}`;
  return (
    
    <div className="m-4 p-4 w-60  bg-gray-100 rounded-lg hover:shadow-lg   ">
      
       <img className="" src={imageUrl} alt={name} /> 
      {/* <img src={imageUrl} alt={resData.info.name} /> */}
     <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
   
  );
};
 export const withPromotedLabel = (RestaurantCard) =>{
  return(props)=>{
    return(
      <div>
        <label>Promoted!</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;


