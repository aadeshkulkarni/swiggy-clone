import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";
const Body = () => {
    const isOnline = useOnlineStatus()
    const { listOfRestaurants = [], filteredRestaurant = [] } = useRestaurants();
    const [searchText, setSearchText] = useState("")
    const RestaurantCardOpen = withOpenLabel(RestaurantCard)
    if (!isOnline) {
        return <div><h1>Looks like you're offline. Please check your internet connection.</h1></div>
    }
    if (listOfRestaurants?.length === 0) {
        return <Shimmer />
    }
    return (<div className="body">
        <div className="flex items-center p-4 m-4">
            <div className="search">
                <input type="text" className="p-1 border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="px-4 py-1 bg-green-100 m-4 rounded-md" onClick={() => {
                    const filteredRest = listOfRestaurants.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                    if (filteredRest.length != 0) {
                        setFilteredRestaurants(filteredRest)
                    }
                    else {
                        setFilteredRestaurants(listOfRestaurants)
                    }
                }}>Search</button>
            </div>
            <div className="p-4 m-4">
                <button className="px-4 py-2 bg-gray-100" onClick={() => {
                    const filteredRestaurant = listOfRestaurants?.filter(restaurant => restaurant?.info?.avgRating >= 4)
                    setListOfRestaurants(filteredRestaurant)
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="flex flex-wrap">
            {filteredRestaurant?.map((restaurant, index) => restaurant?.info?.isOpen ? <RestaurantCardOpen restaurantData={restaurant} key={index} /> : <RestaurantCard restaurantData={restaurant} key={index} />)}
        </div>
    </div >)
}

export default Body;