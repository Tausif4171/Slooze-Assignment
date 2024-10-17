import trackingOrder from "../assets/icons/trackingOrder.svg";
import filter from "../assets/icons/filter.svg";
import download from "../assets/icons/download.svg";
import arrow from "../assets/icons/arrow.svg";
import search from "../assets/icons/search.svg";

const OrderTracking = ({
  initialOrders,
  onOrderClick,
  setSelectedOrderId,
}: any) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-[#def9e6] text-[#4cab68]";
      case "Shipping":
        return "bg-[#e0f2fe] text-[#0ea5e9]";
      case "Pending":
        return "bg-[#fef3c7] text-[#f59e0b]";
      default:
        return "";
    }
  };

  function handleRowClick(order: any) {
    setSelectedOrderId(order.id);
    onOrderClick(order);
  }

  return (
    <div className="p-4 mt-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-x-3">
          <div className="flex bg-white border border-[#eee] justify-center items-center w-[36px] h-[36px] rounded-md">
            <img className="w-5 h-5" src={trackingOrder} />
          </div>
          <h2 className="text-[16px] font-bold">Tracking Order</h2>
        </div>
        <div className="flex gap-x-3 items-center">
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <img className="w-5 h-5" src={search} />
            </div>
            <input
              type="text"
              id="search"
              className="block p-2 ps-10 text-sm placeholder:text-black bg-white border border-[#eee] rounded-lg w-50 font-semibold focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <div className=" flex justify-center items-center gap-x-2 border border-[#eee] rounded-md p-2">
            <img className="w-4 h-4" src={filter} />
            <h4 className=" font-semibold text-sm">Filter</h4>
          </div>
          <div className=" flex justify-center items-center gap-x-2 border border-[#eee] rounded-md p-2">
            <img className="w-5 h-[18px]" src={download} />
            <h4 className=" font-semibold text-sm">Exports</h4>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-4 pl-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-3 h-3 text-blue-600 bg-gray-100 border-[#eee] rounded "
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </th>
              {[
                "Order ID",
                "Category",
                "Arrival Time",
                "Weight",
                "Route",
                "Fee",
                "Status",
              ].map((header, index) => (
                <th
                  key={header}
                  scope="col"
                  className={`${
                    index === 0 ? "px-2" : "px-6"
                  } py-3 cursor-pointer`}
                >
                  <span className="text-[12px] text-[#9b9b9b]">{header}</span>
                  <span className=" float-end">
                    <svg
                      className="w-[14px] h-[14px] ms-1 mt-[1px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                      />
                    </svg>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {initialOrders.map((order: any) => (
              <tr
                key={order.id}
                onClick={() => handleRowClick(order)}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="w-4 py-5 pl-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded "
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <td className="px-2 py-5 font-semibold text-black">
                  {order.id}
                </td>
                <td className="px-6 py-5 font-semibold text-black">
                  {order.category}
                </td>
                <td className="px-6 py-5 font-semibold text-black">
                  {order.arrivalTime}
                </td>
                <td className="px-6 py-5 font-semibold text-black">
                  {order.weight}
                </td>
                <td className="flex gap-x-2 items-center px-6 py-5 font-semibold text-black">
                  {order.route.split("->")[0]}
                  <img className="w-3 h-3" src={arrow} />
                  {order.route.split("->")[1]}
                </td>
                <td className="px-6 py-5 font-semibold text-black">
                  {order.fee}
                </td>
                <td
                  className={`px-6 py-2 mt-3 font-semibold rounded-md flex items-center justify-center ${getStatusStyles(
                    order.status
                  )}`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTracking;
