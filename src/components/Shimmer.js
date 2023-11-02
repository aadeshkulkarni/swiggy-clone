const Shimmer = () => {
    return (<div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="flex flex-wrap items-center justify-center col-span-10">
            <div className="flex flex-wrap items-center justify-center col-span-10">
                {[...Array(12).keys()].map(item => (<div data-testid="resCard" className="m-2 p-4 w-[340px]" >
                    <div className="w-full h-[200px] rounded-xl bg-gray-200">
                    </div>
                    <div className="restaurant-details">
                        <div className="w-full py-2 my-1 font-bold bg-gray-200"></div>
                        <div className="flex justify-between font-semibold">
                            <div className="w-full my-1 bg-gray-200"></div>
                            <div className="w-full my-1 bg-gray-200"></div>
                        </div>
                        <div className="w-full py-2 my-1 text-sm font-light truncate bg-gray-200"></div>
                        <div className="w-full py-2 my-1 text-sm font-light truncate bg-gray-200"></div>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
    )
}

export default Shimmer;