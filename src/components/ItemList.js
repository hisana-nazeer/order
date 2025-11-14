import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // pass full item instead of string
  };

  if (!items || items.length === 0)
    return (
      <div className="text-gray-500 italic p-4 text-center">
        No items
      </div>
    );

  return (
    <div>
      {items.map((item, index) => {
        // Support both menu items and cart items
        const info = item?.card?.info || item?.info || item;

        return (
          <div
            data-testid="foodItems"
            key={info.id || index}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{info.name}</span>
                <span>
                  {" "}
                  - ${info.price
                    ? Math.floor(info.price / 1500)
                    : info.defaultPrice
                    ? Math.floor(info.defaultPrice / 1500)
                    : 0}
                </span>
              </div>
              <p className="text-xs">{info.description}</p>
            </div>

            <div className="w-3/12 p-4 relative">
              {info.imageId && (
                <img
                  src={CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-full"
                />
              )}
              {/* Add button only if item is from menu */}
              {item?.card?.info && (
                <button
                  onClick={() => handleAddItem(info)}
                  className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-semibold text-sm px-3 py-1 rounded-lg shadow-md hover:bg-green-50 transition-all h-7"
                >
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
