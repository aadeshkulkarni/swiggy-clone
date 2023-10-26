import { CDN_URL } from '../utils/constants'
const RestaurantCard = (props) => {
    const { id, name, avgRating, cuisines, areaName, sla, cloudinaryImageId } = props?.restaurantData?.info

    return (<div className="restaurant-card" key={id}>
        <img src={CDN_URL + cloudinaryImageId} alt="restaurant-logo" />
        <div className="restaurant-details">
            <div className="restaurant-name">{name}</div>
            <div className="list">
                <div className="rating">{avgRating}</div>
                <div>{sla.slaString}</div>
            </div>
            <div className="cuisine">{cuisines.join(", ")}</div>
            <div className="area">{areaName}</div>
        </div>
    </div>)
}
export default RestaurantCard;