import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADDRESS_AUTOCOMPLATE_API, ADDRESS_RECOMMENDATION_API, LOGO_URL, PROXY_CORS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setAddress } from "../utils/slices/addressSlice";

const features = [
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf",
    title: "No Minimum Order",
    description: "Order in for yourself or for the group, with no restrictions on order value",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy",
    title: "Live Order Tracking",
    description: "Know where your order is at all times, from the restaurant to your doorstep",
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn",
    title: "Lightning-Fast Delivery",
    description: "Experience Swiggy's superfast delivery for food delivered fresh & on time",
  },
];

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchSuggestions();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  async function fetchSearchSuggestions() {
    const data = await fetch(PROXY_CORS + ADDRESS_AUTOCOMPLATE_API.replace("[ADDRESS]", searchText));
    const result = await data.json();
    setSearchResults(result.data || []);
  }

  async function fetchLatLng(placeId) {
    const data = await fetch(PROXY_CORS + ADDRESS_RECOMMENDATION_API + placeId);
    const result = await data.json();
    dispatch(setAddress(result.data[0]));
    navigate("/");
  }

  return (
    <div className="relative h-screen">
      <div className="md:hidden">
        <div className="flex flex-col justify-center items-center">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="text-lg border border-gray-500 p-4 col-span-10 w-screen"
            type="text"
            placeholder="Enter your delivery location"
          ></input>
          {/* <button onClick={() => fetchLatLng(searchResults[0].place_id)} className="col-span-2 bg-orange-500 text-white font-bold p-4">
            FIND FOOD
          </button> */}
          <div className="absolute left-0 top-20 z-30 bg-white border border-gray-300">
            {searchResults &&
              searchResults.length > 0 &&
              searchResults.map((result) => (
                <div
                  key={result.place_id}
                  onClick={() => fetchLatLng(result.place_id)}
                  className="cursor-pointer hover:bg-gray-50 text-gray-700 text-sm text-light p-4 border-b border-gray-300"
                >
                  {result.description}
                </div>
              ))}
          </div>
        </div>
        <img className="w-screen h-3/5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_640/2xImageWideCollection_oksunf" />
      </div>
      <div className="hidden md:grid grid-cols-12">
        <div className="col-span-6 p-12">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img className="p-4 w-48" src={LOGO_URL} alt="logo" />
            </Link>
            <div className="flex">
              <button className="font-semibold px-4 py-2">Login</button>
              <button className="bg-black text-white px-4 font-semibold  py-2">Sign up</button>
            </div>
          </div>
          <div className="pt-20">
            <h1 className="pt-4 pb-2 text-4xl font-bold">Cooking gone wrong?</h1>
            <h3 className="text-2xl text-gray-500 font-light">Order food from favourite restaurants near you.</h3>
            <div className="relative">
              <div className="grid grid-cols-12 mt-4">
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="text-lg border border-gray-500 p-4 col-span-10"
                  type="text"
                  placeholder="Enter your delivery location"
                ></input>
                <button onClick={() => fetchLatLng(searchResults[0].place_id)} className="col-span-2 bg-orange-500 text-white font-bold p-4">
                  FIND FOOD
                </button>
                <div className="absolute left-0 top-20 z-30 bg-white border border-gray-300">
                  {searchResults &&
                    searchResults.length > 0 &&
                    searchResults.map((result) => (
                      <div
                        key={result.place_id}
                        onClick={() => fetchLatLng(result.place_id)}
                        className="cursor-pointer hover:bg-gray-50 text-gray-700 text-sm text-light p-4 border-b border-gray-300"
                      >
                        {result.description}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" />
        </div>
      </div>
      <div className="bg-rose-950 grid grid-cols-12 text-white p-8 absolute bottom-0 left-0 w-screen">
        {features.map((feature) => (
          <div className="flex flex-col justify-center items-center col-span-4">
            <img className="w-[105px] aspect-auto" src={feature.img} />
            <div className="py-2 pt-4 font-bold">{feature.title}</div>
            <div className="py-2 text-sm w-[300px] text-center">{feature.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
