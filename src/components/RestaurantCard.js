import { Link } from 'react-router-dom';
import { CDN_URL } from '../utils/constants'
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
const RestaurantCard = (props) => {
    const { id, name, avgRating, cuisines, areaName, sla, cloudinaryImageId } = props?.restaurantData?.info
    const data = useContext(UserContext)
    console.log(data)
    return (<Link to={`/restaurant/${id}`} key={id}>
        <div className="m-4 p-4 w-[240px]" >
            <img className="w-full h-[160px] rounded-md object-cover" src={CDN_URL + cloudinaryImageId} alt="restaurant-logo" />
            <div className="restaurant-details">
                <div className="font-bold py-4">{name}</div>
                <div className="flex justify-between font-semibold">
                    <div className="rating">{avgRating}</div>
                    <div>{sla.slaString}</div>
                </div>
                <div className="text-sm font-light truncate py-1">{cuisines.join(", ")}</div>
                <div className="text-sm font-light truncate py-1">{areaName}</div>
                <div>{data?.loggedInUser}</div>
            </div>
        </div>
    </Link>)
}

// Higher order component

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (<div className="relative">
            <label className="absolute bg-green-600 text-white p-1 rounded-md top-6 left-4 text-xs px-2">Is open</label>
            <RestaurantCard {...props}/>
        </div>)
    }
}
export default RestaurantCard;