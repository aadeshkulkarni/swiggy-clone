import { PROXY_CORS, RESTAURANTS_MENU_API } from '../utils/constants'
import { useState, useEffect } from 'react'

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    const [menuInfo, setMenuInfo] = useState(null)
    useEffect(() => {
        fetchRestaurantMenu();
    }, [])
    async function fetchRestaurantMenu() {
        const data = await fetch(PROXY_CORS+RESTAURANTS_MENU_API + resId)
        const json = await data.json()

        const restaurantInfo = json?.data?.cards[0]?.card?.card?.info
        setResInfo(restaurantInfo)
        let menuCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        if(menuCards === undefined){
            menuCards = json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        }
        const menu = menuCards?.filter(card => card.card.card.itemCards !== undefined)
        setMenuInfo(menu)
    }
    return { restaurantInfo: resInfo, menuInfo }
}

export default useRestaurantMenu;