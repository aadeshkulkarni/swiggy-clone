import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RESTAURANTS_API } from '../utils/constants'
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurant, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
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
                    const filteredRest = listOfRestaurants.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                    if(filteredRest.length !=0){
                        setFilteredRestaurants(filteredRest)
                    }
                    else{
                        setFilteredRestaurants(listOfRestaurants)
                    }
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter(restaurant => restaurant?.info?.avgRating >= 4)
                setListOfRestaurants(filteredRestaurant)
            }}>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
            {filteredRestaurant.map((restaurant, index) => <RestaurantCard restaurantData={restaurant} key={index} />)}
        </div>
    </div >)
}

export default Body;