import React, {useState} from 'react'

import ItemList from './ItemList'

const RestaurantCategory = ({ card, showItems, setOpenMenuIndex }) => {
    return (<div className="bg-gray-50 mb-4">
        <div className="w-full bg-gray-50 shadow-md p-4 flex justify-between cursor-pointer" onClick={() => {
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