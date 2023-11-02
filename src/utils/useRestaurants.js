import { useEffect, useState } from "react";
import { RESTAURANTS_API, SWIGGY_PROXY } from './constants'

const useRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurants] = useState([])
    const [ResturantHeader,setRestaurantHeader] = useState(null)
    useEffect(() => {
        fetchRestaurants();
    }, [])

    async function fetchRestaurants() {
        // const data = await fetch(SWIGGY_PROXY+"/"+RESTAURANTS_API);
        const data = await fetch(RESTAURANTS_API);
        const json = await data.json()
        const list = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(json?.data?.cards[2]?.card?.card)
        setRestaurantHeader(json?.data?.cards[2]?.card?.card)
        setListOfRestaurants(list);
        setFilteredRestaurants(list);
    }
    return { listOfRestaurants, filteredRestaurant, ResturantHeader, setListOfRestaurants, setFilteredRestaurants, setRestaurantHeader }
}
export default useRestaurants;