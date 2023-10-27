import React, { useEffect, useState } from 'react'
import { CDN_URL, RESTAURANTS_MENU_API } from '../utils/constants'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
    const params = useParams()
    const resId = params?.resId
    const [menu, setMenu] = useState(null)
    const [restaurantInfo, setRestaurantInfo] = useState(null)
    useEffect(() => {
        fetchRestaurantMenu();
    }, [])
    async function fetchRestaurantMenu() {
        const data = await fetch(RESTAURANTS_MENU_API + resId)
        const json = await data.json()
        setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info)
        const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        const cleanedMenu = menuData?.filter(card => card.card.card.itemCards !== undefined)
        setMenu(cleanedMenu)
    }
    const { name, cuisines } = restaurantInfo
    if (menu === null) {
        return <Shimmer />
    }
    return (
        <div className="menu">
            <div></div>
            <div>
                <h1>{name}</h1>
                <p>{cuisines.join(", ")}</p>
                <h2>Menu</h2>
                <h3>{restaurantInfo?.title}</h3>
                {menu?.map(card => {
                    return (<div>
                        <h3>{card?.card?.card?.title}</h3>
                        {card?.card?.card?.itemCards?.map((item) => <MenuCard item={item} />)}
                    </div>)
                })}
            </div>
            <div></div>
        </div>
    )
}


const MenuCard = (props) => {
    const { item } = props
    return (<div className="menu-card">
        <div className="menu-left-card">
            <div className="">{item.card.info.isVeg ? "Veg" : "NonVeg"}</div>
            <div className="">{item.card.info.name}</div>
            <div className="rupee">{item.card.info.price / 100}</div>
            <div className="item-description">{item.card.info.description}</div>
        </div>
        <div>
            <img className="item-img" src={CDN_URL + item.card.info.imageId} />
            <button className="add-btn">ADD</button>
        </div>
    </div>)
}
export default RestaurantMenu