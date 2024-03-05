import { useEffect, useState } from "react";
import { DEFAULT_LAT, DEFAULT_LNG, RESTAURANTS_API, generateProxyUrl } from "./constants";
import { useSelector } from "react-redux";

const useRestaurants = () => {
  const addressDetails = useSelector((store) => store?.address?.addressDetails);
  console.log("Address Details: ", addressDetails);
  const lat = addressDetails?.geometry?.location?.lat;
  const lng = addressDetails?.geometry?.location?.lng;
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [ResturantHeader, setRestaurantHeader] = useState(null);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const resource = generateProxyUrl(RESTAURANTS_API.replace(DEFAULT_LAT, lat).replace(DEFAULT_LNG, lng));
    const data = await fetch(resource);
    const json = await data.json();

    let filteredCard = json?.data?.cards?.find((item) => item.card.card.id && item.card.card.id === "restaurant_grid_listing");
    let list = filteredCard ? filteredCard?.card?.card?.gridElements?.infoWithStyle?.restaurants : [];

    setRestaurantHeader(list === undefined ? json?.data?.cards[3]?.card?.card : json?.data?.cards[2]?.card?.card);
    setListOfRestaurants(list);
    setFilteredRestaurants(list);
  }
  return { listOfRestaurants, filteredRestaurant, ResturantHeader, setListOfRestaurants, setFilteredRestaurants, setRestaurantHeader };
};
export default useRestaurants;
