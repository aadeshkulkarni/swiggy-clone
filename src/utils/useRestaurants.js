import { useEffect, useState } from "react";
import { RESTAURANTS_API } from './constants'

const useRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchRestaurants();
    }, [])

    async function fetchRestaurants() {
        const data = await fetch(RESTAURANTS_API);
        const json = await data.json()
        const list = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(list);
        setFilteredRestaurants(list);
    }
    return { listOfRestaurants, filteredRestaurant }
}
export default useRestaurants;