import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RESTAURANTS_API } from '../utils/constants'
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetchRestaurants();
    }, [])

    async function fetchRestaurants() {
        const data = await fetch(RESTAURANTS_API);
        const json = await data.json()
        const list = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(list);
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />
    }
    return (<div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button onClick={() => {
                    //Filter the restaurant cards and update the UI
                    console.log(searchText)
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                const data = listOfRestaurants.filter(restaurant => {
                    return restaurant?.info?.avgRating >= 4
                })
                setListOfRestaurants(data)
            }}>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
            {listOfRestaurants.map((restaurant, index) => <RestaurantCard restaurantData={restaurant} key={index} />)}
        </div>
    </div >)
}

export default Body;