import MOCK_DATA from "../utils/cuisinesMock";

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="flex flex-wrap items-center justify-center col-span-10">
          <div className="w-full px-4 border-b border-gray-200">
            <h1 className="px-8 py-4 mt-4 text-2xl font-bold bg-gray-200 w-[300px]"> </h1>
            <div className="flex py-4 overflow-hidden flex-nowrap">
              {MOCK_DATA?.card?.card?.imageGridCards?.info?.map((item) => (
                <div key={item?.id}>
                  <div className="w-[140px] h-[140px] min-w-[140px] bg-gray-200 rounded-full"></div>
                  {/* <div className="text-lg font-bold">{item?.action?.text}</div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-1"></div>
          <div className="flex flex-wrap items-center justify-center col-span-10">
            <div className="flex flex-wrap items-center justify-center col-span-10">
              {[...Array(12).keys()].map((item) => (
                <div key={item} data-testid="resCard" className="m-2 p-4 w-[340px]">
                  <div className="w-full h-[200px] rounded-xl bg-gray-200"></div>
                  <div className="restaurant-details">
                    <div className="w-full py-2 my-1 font-bold bg-gray-200"></div>
                    <div className="flex justify-between font-semibold">
                      <div className="w-full my-1 bg-gray-200"></div>
                      <div className="w-full my-1 bg-gray-200"></div>
                    </div>
                    <div className="w-full py-2 my-1 text-sm font-light truncate bg-gray-200"></div>
                    <div className="w-full py-2 my-1 text-sm font-light truncate bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Shimmer;
