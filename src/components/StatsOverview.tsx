import shipment from "../assets/icons/shipment.svg";
import Delivery from "../assets/icons/Delivery.svg";
import trackingOrder from "../assets/icons/trackingOrder.svg";
import Basket from "../assets/icons/Basket.svg";
import trendUp from "../assets/icons/trendUp.svg";
import trendDown from "../assets/icons/trendDown.svg";
import info from "../assets/icons/info.svg";

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="p-4 bg-white rounded-md shadow">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-x-2 items-center">
              <h3 className="text-[#202224] text-[14px] font-medium">
                Total Shipments
              </h3>
              <img src={info} />
            </div>
            <h3 className="text-[28px] font-bold">6.521</h3>
          </div>
          <div className="flex bg-white border border-[#eee] justify-center items-center w-[36px] h-[36px] rounded-md">
            <img className="w-6 h-6" src={Delivery} />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h5 className="text-[#202224] text-[14px] font-medium">
            vs Last Week
          </h5>
          <div>
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full ">
              +1.3%
              <img className="w-3 h-3" src={trendUp} />
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-md shadow">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-x-2 items-center">
              <h3 className="text-[#202224] text-[14px] font-medium">
                Total Order
              </h3>
              <img src={info} />
            </div>
            <h3 className="text-[28px] font-bold">10.105</h3>
          </div>
          <div className="flex bg-white border border-[#eee] justify-center items-center w-[36px] h-[36px] rounded-md">
            <img className="w-5 h-5" src={trackingOrder} />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h5 className="text-[#202224] text-[14px] font-medium">
            vs Last Week
          </h5>
          <div>
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-[#ffd3d3] text-[red] rounded-full ">
              -2.1%
              <img className="w-3 h-3" src={trendDown} />
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-md shadow">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-x-2 items-center">
              <h3 className="text-[#202224] text-[14px] font-medium">
                Revenue
              </h3>
              <img src={info} />
            </div>
            <h3 className="text-[28px] font-bold">$12.167</h3>
          </div>
          <div className="flex bg-white border border-[#eee] justify-center items-center w-[36px] h-[36px] rounded-md">
            <img className="w-6 h-6" src={Basket} />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h5 className="text-[#202224] text-[14px] font-medium">
            vs Last Week
          </h5>
          <div>
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full ">
              +1.3%
              <img className="w-3 h-3" src={trendUp} />
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-md shadow">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-x-2 items-center">
              <h3 className="text-[#202224] text-[14px] font-medium">
                Delivered
              </h3>
              <img src={info} />
            </div>
            <h3 className="text-[28px] font-bold">1.840</h3>
          </div>
          <div className="flex bg-white border border-[#eee] justify-center items-center w-[36px] h-[36px] rounded-md">
            <img className="w-5 h-5" src={shipment} />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h5 className="text-[#202224] text-[14px] font-medium">
            vs Last Week
          </h5>
          <div>
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-[#ffd3d3] text-[red] rounded-full ">
              -3.1%
              <img className="w-3 h-3" src={trendDown} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
