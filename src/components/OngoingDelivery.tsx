import ShipmentCard from "./ShipmentCard";
import Delivery from "../assets/icons/Delivery.svg";
import filter from "../assets/icons/filter.svg";

const OngoingDelivery = ({ order, initialOrders }: any) => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-x-2 items-center">
          <div className="flex bg-white border border-[#eee] justify-center items-center w-[36px] h-[36px] rounded-md">
            <img className="w-6 h-6" src={Delivery} />
          </div>
          <h3>Ongoing delivery</h3>
        </div>
        <div className="flex justify-center items-center gap-x-2 border border-[#eee] rounded-md p-2">
          <img className="w-4 h-4" src={filter} />
          <h4 className="font-semibold text-sm">Filter</h4>
        </div>
      </div>
      <div
        className="flex flex-col gap-y-2 h-[360px] overflow-y-auto pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {initialOrders.map((data: any) => (
          <ShipmentCard key={data.id} data={data} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OngoingDelivery;
