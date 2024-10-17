import React, { useState } from "react";
import Header from "../components/Header";
import StatsOverview from "../components/StatsOverview";
import OrderTracking from "../components/OrderTracking";
import TimePeriodSelector from "../components/TimePeriodSelector";
import Main from "../components/Main";

const initialOrders = [
  {
    id: "#001234ABCD",
    category: "Electronic",
    arrivalTime: "6/30/2023",
    weight: "15kg",
    route: "87 Wern Ddu Lane -> 123 Market St",
    fee: "$1,200",
    status: "Delivered",
    distance: "80.14 km",
    estimation: "2d 3h",
    latitude: 51.505,
    longitude: -0.09,
  },
  {
    id: "#0023456LKH",
    category: "Furniture",
    arrivalTime: "7/2/2023",
    weight: "45kg",
    route: "215 Rosewood Ave -> 56 Oak St",
    fee: "$1,800",
    status: "Shipping",
    distance: "25.50 km",
    estimation: "1d 8h",
    latitude: 51.515,
    longitude: -0.1,
  },
  {
    id: "#0034567MKL",
    category: "Appliances",
    arrivalTime: "7/5/2023",
    weight: "75kg",
    route: "45 Elm St -> 87 Wern Ddu Lane",
    fee: "$2,700",
    status: "Pending",
    distance: "90.70 km",
    estimation: "3d 7h",
    latitude: 51.525,
    longitude: -0.11,
  },
  {
    id: "#0045678NPO",
    category: "Books",
    arrivalTime: "7/3/2023",
    weight: "5kg",
    route: "78 Ridge Rd -> 9 Spring Ln",
    fee: "$350",
    status: "Delivered",
    distance: "15.30 km",
    estimation: "4h",
    latitude: 51.535,
    longitude: -0.12,
  },
  {
    id: "#0056789QWE",
    category: "Clothing",
    arrivalTime: "7/1/2023",
    weight: "12kg",
    route: "32 Ash Ln -> 15 Vicar Lane",
    fee: "$500",
    status: "Shipping",
    distance: "28.60 km",
    estimation: "6h",
    latitude: 51.545,
    longitude: -0.13,
  },
  {
    id: "#0067890RTY",
    category: "Groceries",
    arrivalTime: "7/4/2023",
    weight: "18kg",
    route: "56 Cedar Ave -> 104 Palm St",
    fee: "$200",
    status: "Pending",
    distance: "20.10 km",
    estimation: "1d 3h",
    latitude: 51.555,
    longitude: -0.14,
  },
];

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
        <div className="flex-1 px-8 py-4 overflow-y-auto">
          <TimePeriodSelector />
          <StatsOverview />
          <Main selectedOrder={selectedOrder} initialOrders={initialOrders} />
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
