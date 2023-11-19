import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants'
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
const RestaurantCard = (props) => {
    const { id, name, avgRating, cuisines, areaName, sla, cloudinaryImageId } = props?.restaurantData?.info
    const data = useContext(UserContext)
    return (<Link to={`/restaurant/${id}`} key={id}>
        <div data-testid="resCard" className="hover:shadow-lg m-2 p-4 w-[340px]" >
            <img className="w-full h-[200px] rounded-xl object-cover" src={CDN_URL + cloudinaryImageId} alt="restaurant-logo" />
            <div className="restaurant-details">
                <div className="py-4 font-bold">{name}</div>
                <div className="flex justify-between font-semibold">
                    <div className="rating">{avgRating}</div>
                    <div>{sla.slaString}</div>
                </div>
                <div className="py-1 text-sm font-light truncate">{cuisines.join(", ")}</div>
                <div className="py-1 text-sm font-light truncate">{areaName}</div>
                {/* <div>{data?.loggedInUser}</div> */}
            </div>
        </div>
    </Link>)
}

// Higher order component

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (<div className="relative">
            <label className="absolute py-1 px-2 text-xs text-white bg-green-600 rounded-lg top-4 left-4">Open</label>
            <RestaurantCard {...props}/>
        </div>)
    }
}
export default RestaurantCard;