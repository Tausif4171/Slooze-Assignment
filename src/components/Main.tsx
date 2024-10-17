import OngoingDelivery from "./OngoingDelivery";
import OnTheWay from "./OnTheWay";

function Main({ initialOrders, selectedOrder }: any) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_2fr] gap-6 bg-white rounded-lg shadow pt-4 px-4">
      <OngoingDelivery order={selectedOrder} initialOrders={initialOrders} />
      <OnTheWay order={selectedOrder} initialOrders={initialOrders} />
    </div>
  );
}

export default Main;
