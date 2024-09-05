import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MyEvents from "../pages/Myevents/myEvents.jsx";
import MyTickets from "../pages/Mytickets/MyTickets.jsx";
import ForYou from "../pages/ForYou.jsx";
import Sell from "../pages/Sell.jsx";
import MyAccounts from "../pages/MyAccounts.jsx";
import Home from "../pages/Home.jsx";
import BottomNavigation from "../components/BottomNavigation.jsx";

const Navigation = () => {
  return (
    <div className="pb-16">
      <Routes>
        {/* Redirect root to /discover */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Main routes */}
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/myaccount" element={<MyAccounts />} />
        <Route path="/home" element={<Home />} />
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Navigation;
