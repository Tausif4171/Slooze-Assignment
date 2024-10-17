import React, { useState } from "react";
import Settings from "../assets/icons/Settings.svg";
import notification from "../assets/icons/notification.svg";
import search from "../assets/icons/search.svg";

const Header = () => {
  const [language, setLanguage] = useState("ENG");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (value: any) => {
    setLanguage(value);
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between items-center bg-white px-8 py-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="flex -space-x-2">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Avatar"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
            src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Avatar"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
            src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
            alt="Avatar"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Avatar"
          />

          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-avatar-group-dropdown"
              className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-200 focus:outline-none focus:bg-gray-300 text-sm dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:border-neutral-800"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <span className="font-medium leading-none">+40</span>
            </button>

            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 hidden z-10 transition-opacity duration-300 mb-2 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-avatar-group-dropdown"
            >
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                href="#"
              >
                Chris Lynch
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                href="#"
              >
                Maria Guan
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                href="#"
              >
                Amil Evara
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                href="#"
              >
                Ebele Egbuna
              </a>
            </div>
          </div>
        </div>

        <div className="relative inline-block items-center w-[90px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block w-[90px] bg-white border border-gray-200 rounded-lg py-2 px-4 text-gray-700 text-left focus:outline-none focus:ring focus:ring-blue-500"
          >
            {language}
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
            <div className="absolute mt-1 w-[90px] bg-white border border-gray-300 rounded-lg z-10">
              <button
                onClick={() => handleLanguageChange("ENG")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-t-lg"
              >
                ENG
              </button>
              <button
                onClick={() => handleLanguageChange("AR")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100"
              >
                AR
              </button>
              <button
                onClick={() => handleLanguageChange("PT")}
                className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-b-lg"
              >
                PT
              </button>
            </div>
          )}
        </div>

        <button
          type="button"
          className=" inline-flex justify-center items-center size-[42px] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <div className="relative">
            <img src={notification} />
            <span className="absolute top-0 end-0 bg-red-500 rounded-full w-2 h-2"></span>
          </div>
        </button>

        <button
          type="button"
          className=" inline-flex justify-center items-center size-[40px] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <img src={search} />
        </button>

        <button
          type="button"
          className=" inline-flex justify-center items-center size-[40px] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <img className="w-6 h-6" src={Settings} />
        </button>
      </div>
    </header>
  );
};

export default Header;
