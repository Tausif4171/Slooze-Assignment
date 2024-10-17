import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIcon from "../assets/icons/location.png";

const customIcon = L.icon({
  iconUrl: locationIcon,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

// Define types for order
interface Order {
  latitude: number;
  longitude: number;
  category: string;
  distance: string;
  estimation: string;
  weight: string;
  fee: string;
  arrivalTime?: string;
}

interface OnTheWayProps {
  order?: Order;
  initialOrders: Order[];
}

function OnTheWay({ order, initialOrders }: OnTheWayProps) {
  const displayOrder = order || initialOrders[0];

  const position: [number, number] = displayOrder
    ? [displayOrder.latitude, displayOrder.longitude]
    : [51.505, -0.09]; // Default position (latitude, longitude)

  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-[16px]">On the way</h4>
        <h5 className="text-[#807e7e] text-[14px]">
          {displayOrder ? displayOrder.arrivalTime : ""}
        </h5>
      </div>

      {displayOrder ? (
        <>
          <div className="h-[300px] w-full mb-4">
            <MapContainer
              center={userPosition || position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={customIcon}>
                <Popup>Your shipment is here.</Popup>
              </Marker>
              {userPosition && (
                <Marker position={userPosition} icon={customIcon}>
                  <Popup>You are here.</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>

          <div className="grid grid-cols-5 mb-4">
            <div className="flex flex-col px-1 border-r border-r-[#eee]">
              <h5 className="text-[12px] text-[#bab6b6] font-medium mb-2 leading-3">
                Category
              </h5>
              <h5 className="text-[16px] font-bold">{displayOrder.category}</h5>
            </div>
            <div className="flex flex-col pl-[25px] pr-[15px] border-r border-r-[#eee]">
              <h5 className="text-[12px] text-[#bab6b6] font-medium mb-2 leading-3">
                Distance
              </h5>
              <h5 className="text-[16px] font-bold">{displayOrder.distance}</h5>
            </div>
            <div className="flex flex-col pl-[25px] pr-[15px] border-r border-r-[#eee]">
              <h5 className="text-[12px] text-[#bab6b6] font-medium mb-2 leading-3">
                Estimation
              </h5>
              <h5 className="text-[16px] font-bold">
                {displayOrder.estimation}
              </h5>
            </div>
            <div className="flex flex-col pl-[25px] pr-[15px] border-r border-r-[#eee]">
              <h5 className="text-[12px] text-[#bab6b6] font-medium mb-2 leading-3">
                Weight
              </h5>
              <h5 className="text-[16px] font-bold">{displayOrder.weight}</h5>
            </div>
            <div className="flex flex-col pl-[25px] pr-[15px]">
              <h5 className="text-[12px] text-[#bab6b6] font-medium mb-2 leading-3">
                Fee
              </h5>
              <h5 className="text-[16px] font-bold">{displayOrder.fee}</h5>
            </div>
          </div>
        </>
      ) : (
        <div>Select an order to view details</div>
      )}
    </div>
  );
}

export default OnTheWay;
