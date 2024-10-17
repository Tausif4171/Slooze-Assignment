import React, { useState } from "react";
import Header from "../components/Header";
import StatsOverview from "../components/StatsOverview";
import OrderTracking from "../components/OrderTracking";
import TimePeriodSelector from "../components/TimePeriodSelector";
import OrderStatusPanel from "../components/OrderStatusPanel";
import initialOrders from "../data/orderData";

const Dashboard = () => {
  const [selectedOrder, setSelectedOrder] = useState(initialOrders[0]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleOrderClick = (order: any) => {
    setSelectedOrder(order);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 px-8 pt-8 pb-12 overflow-y-auto">
          <TimePeriodSelector />
          <StatsOverview />
          <OrderStatusPanel
            selectedOrder={selectedOrder}
            initialOrders={initialOrders}
          />
          <OrderTracking
            initialOrders={initialOrders}
            setSelectedOrderId={setSelectedOrderId}
            onOrderClick={handleOrderClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
