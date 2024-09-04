import React from "react";
import { NavLink } from "react-router-dom";

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

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around py-2">
        {/* Discover */}
        <NavLink
          to="/discover"
          className="flex flex-col items-center text-gray-500"
          activeClassName="text-blue-600"
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? blueSearch : ashSearch}
                alt="Discover Icon"
                width={60}
                height={60}
              />
              <span
                className={`text-xs mt-1 px-1 py-1 ${
                  isActive ? "text-blue-600" : ""
                }`}
              >
                Discover
              </span>
            </>
          )}
        </NavLink>

        {/* For You */}
        <NavLink
          to="/foryou"
          className="flex flex-col items-center text-gray-500"
          activeClassName="text-blue-600"
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? blueLove : ashLove}
                alt="For You Icon"
                width={60}
                height={60}
              />
              <span
                className={`text-xs mt-1 px-1 py-1 ${
                  isActive ? "text-blue-600" : ""
                }`}
              >
                For You
              </span>
            </>
          )}
        </NavLink>

        {/* My Events */}
        <NavLink
          to="/myevents"
          className="flex flex-col items-center text-gray-500"
          activeClassName="text-blue-600"
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? blueTicket : ashTicket}
                alt="My Events Icon"
                width={60}
                height={60}
              />
              <span
                className={`text-xs mt-1 px-1 py-1 ${
                  isActive ? "text-blue-600" : ""
                }`}
              >
                My Events
              </span>
            </>
          )}
        </NavLink>

        {/* Sell */}
        <NavLink
          to="/sell"
          className="flex flex-col items-center text-gray-500"
          activeClassName="text-blue-600"
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? blueMoney : ashMoney}
                alt="Sell Icon"
                width={60}
                height={60}
              />
              <span
                className={`text-xs mt-1 px-1 py-1 ${
                  isActive ? "text-blue-600" : ""
                }`}
              >
                Sell
              </span>
            </>
          )}
        </NavLink>

        {/* My Account */}
        <NavLink
          to="/myaccount"
          className="flex flex-col items-center text-gray-500"
          activeClassName="text-blue-500"
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? blueUser : ashUser}
                alt="My Account Icon"
                width={60}
                height={60}
              />
              <span
                className={`text-xs mt-1 px-1 py-1 ${
                  isActive ? "text-blue-600" : ""
                }`}
              >
                My Account
              </span>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNavigation;
