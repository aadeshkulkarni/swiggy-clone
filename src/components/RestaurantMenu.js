import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState(0)
    const { resId } = useParams()
    const { restaurantInfo, menuInfo } = useRestaurantMenu(resId)
    if (menuInfo === null) {
        return <Shimmer />
    }

    return (
        <div className="px-8 flex flex-col justify-center items-center pt-20">
            <div className="p-4 w-3/6 justify-start text-left">
                <div className="font-bold">{restaurantInfo?.name}</div>
                <p className="font-light text-sm text-gray-500">{restaurantInfo?.cuisines.join(", ")}</p>
                <p className="font-light text-sm text-gray-500">{restaurantInfo?.areaName}, {restaurantInfo?.sla?.lastMileTravelString}</p>
                <div className="my-2 text-gray-500 pb-2 border-bottom border-dashed border-gray-500">{restaurantInfo?.feeDetails?.message}</div>
                <div className="text-lg font-bold">{restaurantInfo?.costForTwoMessage}</div>
                <h2>Menu</h2>
                <h3>{restaurantInfo?.title}</h3>
            </div>
            <div className="p-4 w-3/6">
                {menuInfo?.map((card, index) => <RestaurantCategory key={index} card={card?.card?.card} showItems={index === openMenuIndex} setOpenMenuIndex={() => setOpenMenuIndex(openMenuIndex === index ? null : index)} />)}
            </div>
        </div>
    )
}

export default RestaurantMenu