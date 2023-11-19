import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, setRestaurant } from "../utils/slices/cartSlice";
import vegIcon from "./../assets/veg-icon.svg";
import nonVegIcon from "./../assets/non-veg-icon.svg";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ItemList = ({ items }) => {
  const selectedItems = useSelector((store) => store.cart.items);
  const restaurant = useSelector((store) => store.cart.restaurant);
  const { resId } = useParams();
  const { restaurantInfo } = useRestaurantMenu(resId);
  const dispatch = useDispatch();
  const handlerAddItem = (item) => {
    if(restaurant === undefined){
      dispatch(setRestaurant(restaurantInfo));
    }
    else if (restaurant?.id !== restaurantInfo?.id) {
      dispatch(setRestaurant(restaurantInfo));
    }
    dispatch(addItem(item));
  };
  const handlerRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return items?.map((item, index) => {
    const itemsInCart = selectedItems.filter((selectedItem) => selectedItem.card.info.id === item.card.info.id);
    return (
      <div key={index} className="my-4 p-4 grid grid-cols-12 border-b border-gray-200">
        <div className="col-span-10 flex flex-col justify-center">
          <div className="">
            <img className="w-6 h-6" src={item.card.info.isVeg === undefined ? nonVegIcon : vegIcon} alt="vegnon" />
          </div>
          <div className="text-md">{item.card.info.name}</div>
          <div className="before:content-['\20B9'] text-sm">{item.card.info.price / 100}</div>
          <div className="text-xs font-light text-gray-400 py-4">{item.card.info.description}</div>
        </div>
        <div className="col-span-2 flex justify-center items-center relative">
          <img className="md:p-4 object-cover relative rounded-lg" src={CDN_URL + item.card.info.imageId} />
          {itemsInCart.length > 0 ? (
            <div className="min-w-[70px] w-[70px] absolute text-sm font-bold bottom-0 -left-4 md:-bottom-2 md:left-2 bg-white border border-gray-50 rounded-md uppercase shadow-lg grid grid-cols-12">
              <button onClick={() => handlerRemoveItem(item)} className="h-full col-span-4 p-2">
                -
              </button>
              <span className="col-span-4 p-2">{itemsInCart.length}</span>
              <button onClick={() => handlerAddItem(item)} className="h-full col-span-4 p-2">
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => handlerAddItem(item)}
              className="absolute text-sm font-bold bottom-0 -left-4 md:-bottom-2 md:left-2 bg-white border border-gray-50 px-6 py-1 rounded-md text-green-600 uppercase shadow-lg"
            >
              ADD
            </button>
          )}
        </div>
      </div>
    );
  });
};

export default ItemList;
