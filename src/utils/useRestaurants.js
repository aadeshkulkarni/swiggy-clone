import { useEffect, useState } from "react";
import { DEFAULT_LAT, DEFAULT_LNG, PROXY_CORS, RESTAURANTS_API } from "./constants";
import { useSelector } from "react-redux";

const useRestaurants = () => {
  const addressDetails = useSelector((store) => store?.address?.addressDetails);
  const lat = addressDetails?.geometry?.location?.lat;
  const lng = addressDetails?.geometry?.location?.lng;
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [ResturantHeader, setRestaurantHeader] = useState(null);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const data = await fetch(PROXY_CORS + RESTAURANTS_API.replace(DEFAULT_LAT, lat).replace(DEFAULT_LNG, lng));
    const json = await data.json();
    let list = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (list === undefined) {
      list = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    }

    setRestaurantHeader(list === undefined ? json?.data?.cards[3]?.card?.card : json?.data?.cards[2]?.card?.card);
    setListOfRestaurants(list);
    setFilteredRestaurants(list);
  }
  return { listOfRestaurants, filteredRestaurant, ResturantHeader, setListOfRestaurants, setFilteredRestaurants, setRestaurantHeader };
};
export default useRestaurants;
