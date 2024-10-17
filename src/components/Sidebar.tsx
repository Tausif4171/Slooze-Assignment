import React from "react";

import shipment from "../assets/icons//shipment.svg";
import logo from "../assets/icons/logo.png";
import dashboard from "../assets/icons/dashboard.svg";
import Basket from "../assets/icons/Basket.svg";
import Mail from "../assets/icons/Mail.svg";
import Question from "../assets/icons/Question.svg";
import Settings from "../assets/icons/Settings.svg";
import Document from "../assets/icons/Document.svg";
import dollar from "../assets/icons/dollar.svg";
import user from "../assets/icons/user.svg";
import arrow from "../assets/icons/arrow.svg";
import grow from "../assets/icons/grow.png";
import arrowDown from "../assets/icons/arrowDown.svg";

interface SidebarProps {
  isOpen: boolean;
  windowWidth: number;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, windowWidth }) => {
  return (
    <div
      className={`w-[280px] ${
        windowWidth < 768
          ? `fixed top-0 left-0 z-40 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out  ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } `
          : "relative h-full bg-white"
      }`}
    >
      <aside className="bg-white p-6 flex flex-col">
        <div className="flex items-center mb-7 ml-[-8px] border-b border-[#eee] pb-3">
          <img className=" w-[60px] h-[60px]" src={logo} />
          <div>
            <span className="text-[21px] leading-3 font-bold">FreightFlow</span>
            <h6 className=" text-[#beb9b9] text-[14px]">Admin Panel</h6>
          </div>
        </div>

        <div className=" flex items-center justify-between border border-[#ddd] rounded-xl py-3 px-2 mb-5">
          <div className="flex items-center">
            <img
              className="inline-block h-10 w-10 mr-3 rounded-full ring-2 ring-white dark:ring-neutral-900"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Avatar"
            />
            <div>
              <h3 className=" font-bold text-[16px] leading-[16px]">
                Ismael Maddox
              </h3>
              <span className=" text-[#beb9b9] text-[14px]">Free plan</span>
            </div>
          </div>
          <svg
            className="w-[14px] h-[14px] ms-1 mt-[1px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            color="#c2bfbf"
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
        </div>

        <div className="mt-auto mb-6">
          <div className="flex justify-between items-center mb-[10px]">
            <h3 className="font-semibold text-gray-500 uppercase text-xs">
              Main Menu
            </h3>
            <img className="w-4 h-4" src={arrowDown} />
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex gap-x-[6px] font-semibold items-center text-[#0da3fb] bg-blue-50 px-4 py-2 rounded-lg"
                >
                  <img className="w-7 h-7" src={dashboard} />
                  <span> Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-x-[10px] font-semibold items-center text-gray-700 px-4 py-2 rounded-lg"
                >
                  <img className="w-6 h-6" src={shipment} />
                  <span>Shipments</span>
                </a>
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#"
                  className="flex gap-x-[6px] font-semibold items-center text-gray-700 px-4 py-2 rounded-lg"
                >
                  <img className="w-7 h-7" src={Basket} />
                  <span>Orders</span>
                </a>
                <div className="w-5 h-5 flex items-center justify-center bg-red-600 text-white text-[12px] rounded-md mr-2">
                  4
                </div>
              </li>
              <li className="flex justify-between items-center">
                <a
                  href="#"
                  className="flex gap-x-[6px] font-semibold items-center text-gray-700 px-4 py-2 rounded-lg"
                >
                  <img className="w-7 h-7" src={Mail} />
                  <span>Messages</span>
                </a>
                <div className="w-5 h-5 px-[14px] flex items-center justify-center bg-red-600 text-white text-[12px] rounded-md mr-2">
                  9+
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-x-[6px] font-semibold items-center text-gray-700 px-4 py-2 rounded-lg"
                >
                  <img className="w-7 h-7" src={user} />
                  <span>Customers</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-x-[6px] font-semibold items-center text-gray-700 px-4 py-2 rounded-lg"
                >
                  <img className="w-7 h-7" src={Question} />
                  <span>Help & Support</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex gap-x-[6px] font-semibold items-center text-gray-700 px-4 py-2 rounded-lg"
                >
                  <img className="w-7 h-7" src={Settings} />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-500 uppercase text-xs">
              Payment
            </h3>
            <img className="w-4 h-4" src={arrowDown} />
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex gap-x-[6px] font-semibold items-center text-gray-700 px-4 py-2 rounded-lg"
              >
                <img className="w-7 h-6" src={Document} />
                <span>Taxes</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-x-[6px] font-semibold items-center text-gray-700 px-4 py-2 rounded-lg"
              >
                <img className="w-6 h-6" src={dollar} />
                <span>Payments</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className=" 2xl:absolute 2xl:bottom-0 m-6  border border-[#ddd] rounded-xl p-2">
        <div className="flex items-center mb-3">
          <img className="w-[50px] h-[50px]" src={grow} />
          <div>
            <h3 className="text-[14px] text-[#abaaaa] font-bold leading-5">
              Upgrade & Unlock all features
            </h3>
          </div>
        </div>
        <div>
          <button className=" gap-x-2 w-full py-1 px-2 text-[14px] flex justify-center items-center rounded-md border border-[#ddd] font-bold">
            <span> Manage your plan </span>
            <img className="w-3 h-3" src={arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
