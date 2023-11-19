import React from 'react'
import MOCK_DATA from '../utils/cuisinesMock';
import { CDN_URL } from '../utils/constants';
const Cuisines = () => {
  return (
    <div className="w-full px-4 border-b border-gray-200">
        <h1 className="px-8 py-4 text-xl md:text-2xl font-bold">{MOCK_DATA?.card?.card?.header?.title}</h1>
        <div className="flex py-4 overflow-hidden flex-nowrap">
        {MOCK_DATA?.card?.card?.imageGridCards?.info?.map(item=>(<div key={item?.id}>
            <img className="cursor-pointer ml-4 w-[140px] min-w-[140px] rounded-full bg-transparent" src={CDN_URL+item?.imageId} />
            {/* <div className="text-lg font-bold">{item?.action?.text}</div> */}
        </div>))}
        </div>
    </div>
  )
}

export default Cuisines