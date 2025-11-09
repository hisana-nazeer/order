import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const category = data;

  if (!category) {
    console.log("No category data found");
    return null;
  }

  const { title, itemCards } = category;

  return (
    <div className="w-6/12 flex flex-col text-center mx-auto my-4 bg-gray-100 shadow-lg p-2">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">
          {title} ({itemCards?.length || 0})
        </span>
        <span>+</span>
      </div>

      {itemCards && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
