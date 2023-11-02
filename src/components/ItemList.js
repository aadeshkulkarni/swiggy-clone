import { useDispatch } from 'react-redux';
import { addItem } from '../utils/slices/cartSlice';

import { CDN_URL } from '../utils/constants'

const ItemList = ({ items }) => {

    const dispatch = useDispatch();
    const handlerAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    }
    return items?.map((item) => (<div className="my-4 p-4 grid grid-cols-12 border-b border-gray-200">
        <div className="col-span-10 flex flex-col justify-center">
            <div className="">{item.card.info.isVeg ? "Veg" : "NonVeg"}</div>
            <div className="text-md">{item.card.info.name}</div>
            <div className="before:content-['\20B9'] text-sm">{item.card.info.price / 100}</div>
            <div className="text-xs font-light text-gray-400 py-4">{item.card.info.description}</div>
        </div>
        <div className="col-span-2 flex justify-center items-center relative">
            <img className="p-4 object-cover relative rounded-lg" src={CDN_URL + item.card.info.imageId} />
            <button
                onClick={()=>handlerAddItem(item)}
                className="absolute text-sm font-bold -bottom-2 left-12 bg-white border border-gray-50 px-6 py-1 rounded-md text-green-600 uppercase shadow-lg">ADD</button>
        </div>
    </div>))
}

export default ItemList