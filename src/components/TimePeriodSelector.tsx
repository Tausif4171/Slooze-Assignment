import React, { useState } from "react";

function TimePeriodSelector() {
  const [timePeriod, setTimePeriod] = useState("Week");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Overview");

  const handleLanguageChange = (value: string) => {
    setTimePeriod(value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-x-1 bg-[#ebebeb] rounded-lg p-2">
        <div
          onClick={() => setSelectedTab("Overview")}
          className={`px-6 py-[6px] font-semibold rounded-lg cursor-pointer transition-all duration-300 ${
            selectedTab === "Overview" ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          Overview
        </div>
        <div
          onClick={() => setSelectedTab("Tracking")}
          className={`px-6 py-[6px] font-semibold rounded-lg cursor-pointer transition-all duration-300 ${
            selectedTab === "Tracking" ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          Tracking
        </div>
      </div>

      <div className="flex gap-x-4">
        <div className="relative inline-block items-center w-[100px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block w-[100px] bg-white border border-gray-200 rounded-lg py-2 px-4 text-gray-700 text-left focus:outline-none focus:ring focus:ring-blue-500"
          >
            {timePeriod}
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06 0L10 10.25l3.71-3.04a.75.75 0 111 1.1l-4 3.25a.75.75 0 01-1 0l-4-3.25a.75.75 0 010-1.1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute mt-1 w-[100px] bg-white border border-gray-300 rounded-lg z-10">
              <button
                onClick={() => handleLanguageChange("Week")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-t-lg"
              >
                Week
              </button>
              <button
                onClick={() => handleLanguageChange("Month")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
              >
                Month
              </button>
              <button
                onClick={() => handleLanguageChange("Year")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-b-lg"
              >
                Year
              </button>
            </div>
          )}
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          + New Shipments
        </button>
      </div>
    </div>
  );
}

export default TimePeriodSelector;
