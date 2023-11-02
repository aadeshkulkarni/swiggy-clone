import React, {useState} from 'react'

import ItemList from './ItemList'

const RestaurantCategory = ({ card, showItems, setOpenMenuIndex }) => {
    return (<div data-testid="menuItem" className="mb-4 bg-gray-50">
        <div className="flex justify-between w-full p-4 shadow-md cursor-pointer bg-gray-50" onClick={() => {
            setOpenMenuIndex()
        }}>
            <span className="text-lg font-bold">{card?.title} ({card?.itemCards?.length})</span>
            <span>⤵</span>
        </div>
        {showItems && <ItemList items={card?.itemCards} />}
    </div>
    )
}

export default RestaurantCategory