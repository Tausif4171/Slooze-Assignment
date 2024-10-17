import truck from "../assets/icons/truck.png";
import arrow from "../assets/icons/arrow.svg";
import Location from "../assets/icons/Location.svg";

function ShipmentCard({ data, order }: any) {
  return (
    <div
      className={` grid grid-cols-[2fr_1fr] rounded-lg border p-3 ${
        order?.id === data.id ? "border-[#1408ef]" : "border-[#eee]"
      }`}
    >
      <div>
        <h5 className="text-[#b5b4b4] text-[14px] font-medium mb-1">
          Shipment number
        </h5>
        <h5 className="font-bold text-[20px] mb-2">{data.id}</h5>
        <div className="flex gap-x-2 items-center">
          <div className=" rounded-full border border-green-200 flex justify-center items-center w-4 h-4">
            <span className="w-2 h-2 bg-[#47e847] rounded-lg"></span>
          </div>
          <h5 className="text-[14px] font-bold">{data.route.split("->")[0]}</h5>
          <img className="w-3 h-3" src={arrow} />
          <div className=" rounded-full border border-[#8c85ed] flex justify-center items-center w-4 h-4">
            <img className="w-3 h-3" src={Location} />
          </div>
          <h5 className="text-[14px] font-bold">{data.route.split("->")[1]}</h5>
        </div>
      </div>

      <div className="flex justify-end">
        <img className=" w-36 h-[90px]" src={truck} />
      </div>
    </div>
  );
}

export default ShipmentCard;
