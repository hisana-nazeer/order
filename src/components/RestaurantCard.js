// const RestaurantCard=(props)=>{
// const { name, cloudinaryImageId, locality }=props;
//   return(
//     <div className='res-card'>
//       {/* <img  className="img1" alt="meghanafoods" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"/> */}
//       <h3>{props.name}</h3>
//       <h4>{props.cloudinaryImageId}</h4>
//       {/* <h4>{resData.Rating} stars</h4> */}


      
//       </div>
//   )
// }

// export default RestaurantCard;
import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId,imageId, locality,areaName, costForTwo,avgRating } = resData?.info || {};
  const imageUrl = `${CDN_URL}${cloudinaryImageId}`;
  return (
    <div className="res-card">
      <h3>{name}</h3>
      <img className="img" src={imageUrl} alt={name} />

      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
