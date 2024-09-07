import React from "react";

// Import your images
import ashUser from "../assets/ashuser.jpg";
import blueUser from "../assets/blueuser.jpg";
import ashTicket from "../assets/ashticket.jpg";
import blueTicket from "../assets/blueticket.jpg";
import ashSearch from "../assets/ashsearch.jpg";
import blueSearch from "../assets/bluesearch.jpg";
import ashMoney from "../assets/ashmoney.jpg";
import blueMoney from "../assets/bluemoney.jpg";
import ashLove from "../assets/ashlove.jpg";
import blueLove from "../assets/bluelover.jpg";

const BottomNavigation = ({ setActiveComponent, activeComponent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around py-2">
        {/* Discover */}
        <button
          onClick={() => setActiveComponent("MyTickets")}
          className="flex flex-col items-center text-gray-500"
        >
          <img
            src={activeComponent === "MyTickets" ? blueSearch : ashSearch}
            alt="Discover Icon"
            width={60}
            height={60}
          />
          <span
            className={`text-xs mt-1 px-1 py-1 ${
              activeComponent === "MyTickets" ? "text-blue-600" : ""
            }`}
          >
            Discover
          </span>
        </button>

        {/* For You */}
        <button
          onClick={() => setActiveComponent("ForYou")}
          className="flex flex-col items-center text-gray-500"
        >
          <img
            src={activeComponent === "ForYou" ? blueLove : ashLove}
            alt="For You Icon"
            width={60}
            height={60}
          />
          <span
            className={`text-xs mt-1 px-1 py-1 ${
              activeComponent === "ForYou" ? "text-blue-600" : ""
            }`}
          >
            For You
          </span>
        </button>

        {/* My Events */}
        <button
          onClick={() => setActiveComponent("MyEvents")}
          className="flex flex-col items-center text-gray-500"
        >
          <img
            src={activeComponent === "MyEvents" ? blueTicket : ashTicket}
            alt="My Events Icon"
            width={60}
            height={60}
          />
          <span
            className={`text-xs mt-1 px-1 py-1 ${
              activeComponent === "MyEvents" ? "text-blue-600" : ""
            }`}
          >
            My Events
          </span>
        </button>

        {/* Sell */}
        <button
          onClick={() => setActiveComponent("Sell")}
          className="flex flex-col items-center text-gray-500"
        >
          <img
            src={activeComponent === "Sell" ? blueMoney : ashMoney}
            alt="Sell Icon"
            width={60}
            height={60}
          />
          <span
            className={`text-xs mt-1 px-1 py-1 ${
              activeComponent === "Sell" ? "text-blue-600" : ""
            }`}
          >
            Sell
          </span>
        </button>

        {/* My Account */}
        <button
          onClick={() => setActiveComponent("MyAccounts")}
          className="flex flex-col items-center text-gray-500"
        >
          <img
            src={activeComponent === "MyAccounts" ? blueUser : ashUser}
            alt="My Account Icon"
            width={60}
            height={60}
          />
          <span
            className={`text-xs mt-1 px-1 py-1 ${
              activeComponent === "MyAccounts" ? "text-blue-600" : ""
            }`}
          >
            My Account
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
