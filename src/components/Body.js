import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";
import Cuisines from "./Cuisines";
const Body = () => {
    const isOnline = useOnlineStatus()
    const { listOfRestaurants = [], filteredRestaurant = [], ResturantHeader, setListOfRestaurants, setFilteredRestaurants } = useRestaurants();
    const [searchText, setSearchText] = useState("")
    const RestaurantCardOpen = withOpenLabel(RestaurantCard)
    if (!isOnline) {
        return <div><h1>Looks like you're offline. Please check your internet connection.</h1></div>
    }
    if (listOfRestaurants?.length === 0) {
        return <Shimmer />
    }
    return (<div className="flex flex-col items-center justify-center">
        <div className="flex items-center p-4 m-4">
            <div className="search">
                <input data-testid="searchInput" type="text" className="p-1 border border-black border-solid" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="px-4 py-1 m-4 bg-green-100 rounded-md" onClick={() => {
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
        <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className="flex flex-wrap items-center justify-center col-span-10">
                <Cuisines />
            </div>
        </div>
        <div className="grid grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-10">
                <h1 className="px-8 py-4 text-2xl font-bold">{ResturantHeader?.header?.title}</h1>
                <div className="flex flex-wrap items-center justify-center ">
                    {filteredRestaurant?.map((restaurant, index) => restaurant?.info?.isOpen ? <RestaurantCardOpen restaurantData={restaurant} key={index} /> : <RestaurantCard restaurantData={restaurant} key={index} />)}
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    </div >)
}

export default Body;