import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const restaurant = useSelector((store) => store.cart.restaurant);
  const dispatch = useDispatch();
  const itemTotal = cartItems.reduce((acc, item) => {
    return (acc = acc + item.card.info.price / 100);
  }, 0);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="bg-gray-200 w-full flex justify-center items-center pt-20">
      <div className="p-8 md:w-4/6 flex flex-col md:grid md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <div className="bg-white md:grid md:grid-cols-12 items-center justify-center p-8">
            <div className="md:col-span-8 flex flex-col justify-center">
              <h1 className="font-bold text-lg text-gray-800">Account</h1>
              <p className="py-4 text-gray-500">To place your order now, log in to your existing account or sign up</p>
              <div className="md:col-span-4 flex flex-col md:flex-row justify-center items-center">
                <div className="w-full border text-center border-green-600 text-green-600 py-2 px-4 cursor-pointer">
                  <div className="text-xs">Have an account?</div>
                  <div className="uppercase font-bold text-sm">Log in</div>
                </div>
                <div className="w-full my-2 md:my-0 mx-4 text-center border border-green-600 bg-green-600 text-white py-2 px-4 cursor-pointer">
                  <div className="text-xs">New to Swiggy?</div>
                  <div className="uppercase font-bold text-sm">Sign up</div>
                </div>
              </div>
            </div>
            <div className="hidden md:col-span-4 md:flex justify-center items-center">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r" alt="food" />
            </div>
          </div>
          <div className="bg-white my-4 p-8">
            <h1 className="col-span-4 font-bold text-gray-400">Delivery Address</h1>
          </div>
          <div className="bg-white my-4 p-8">
            <h1 className="col-span-4 font-bold text-gray-400">Payment</h1>
          </div>
        </div>
        <div className="md:col-span-4 bg-white">
          {cartItems.length !== 0 ? (
            //   <button
            //     onClick={() => {
            //       handleClearCart();
            //     }}
            //     className="p-2 m-2 text-white bg-black rounded-lg"
            //   >
            //     Clear cart
            //   </button>
            <></>
          ) : (
            <h2 className="p-8 text-gray-500 flex flex-col justify-center items-center">
              <div>Cart is Empty.</div>{" "}
              <button onClick={() => navigate("/")} className="hover:text-white hover:bg-green-600 px-4 py-2 mt-4 border border-green-600 text-green-600 font-bold">
                Add items to the Cart!
              </button>
            </h2>
          )}
          {cartItems.length !== 0 && (
            <div className="p-8 grid grid-cols-12">
              <div className="col-span-3">
                <img className="w-12 h-12" src={CDN_URL + restaurant?.cloudinaryImageId} alt="restaurant-logo" />
              </div>
              <div className="col-span-9">
                <h1 className="text-md">{restaurant?.name}</h1>
                <span className="text-gray-500 text-sm py-1 pb-2 border-b border-gray-950">{restaurant?.city}</span>
              </div>
            </div>
          )}
          <div className="px-4">
            <ItemList items={[...new Set(cartItems)]} />
          </div>

          {cartItems.length !== 0 && (
            <div className="p-8">
              <h3 className="text-sm font-bold">Bill Details</h3>
              <div className="py-1 flex justify-between text-sm text-gray-400">
                <div>Item Total</div>
                <div>{Math.ceil(itemTotal, 2)}</div>
              </div>
              <div className="py-1 pb-4 flex justify-between text-xs text-gray-400 border-b border-gray-200">
                <div>Delivery Fee | 1.3 kms</div>
                <div>48</div>
              </div>
              <div className="py-1 pt-4 flex justify-between text-xs text-gray-400">
                <div>Delivery tip</div>
                <div>718</div>
              </div>
              <div className="py-1 flex justify-between text-xs text-gray-400">
                <div>Platform fee</div>
                <div>3</div>
              </div>
              <div className="py-1 pb-4 flex justify-between text-xs text-gray-400 border-b border-gray-900">
                <div>GST and Restaurant Charges</div>
                <div>73.19</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
