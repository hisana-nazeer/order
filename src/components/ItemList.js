const ItemList = ({ items }) => {
  if (!items || items.length === 0) return <div>No items</div>;

  return (
    <div className="p-2 text-left">
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b p-2 m-2  ">
       <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${item.card.info.imageId}`}
                alt={item.card.info.name}
                className="ml-4 w-24 h-24 rounded-lg object-cover shadow-sm"
              />
        <div className="p-2">
         <span className="">{item.card.info.name}</span>   
         <span className="pl-9 text-en">-${Math.floor(item.card.info.price?item.card.info.price/1500:Math.floor(item.card.info.defaultprice/1500))}</span>
         <p className="pt-2">{item.card.info.description}</p>


            </div> 
        </div>
      ))}
    </div>
  );
};

export default ItemList;
