
import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId,imageId, locality,areaName, costForTwo,avgRating } = resData?.info || {};
  const imageUrl = `${CDN_URL}${cloudinaryImageId}`;
  return (
    <div className="res-card">
      <h3>{name}</h3>
      {/* <img className="img" src={imageUrl} alt={name} /> */}
      {/* <img src={imageUrl} alt={resData.info.name} /> */}

      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
