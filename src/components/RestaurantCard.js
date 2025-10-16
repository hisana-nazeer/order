const RestaurantCard=(props)=>{
const { resData,cuisine }=props;
  return(
    <div className='res-card'>
      <img  className="img1" alt="meghanafoods" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"/>
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.Rating} stars</h4>

      
      </div>
  )
}

export default RestaurantCard;