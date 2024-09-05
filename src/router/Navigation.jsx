import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MyTickets from "../pages/Mytickets/MyTickets";
import ForYou from "../pages/ForYou";
import Sell from "../pages/Sell";
import MyAccounts from "../pages/MyAccounts";
import Home from "../pages/Home";
import MyEvents from "../pages/Myevents/MyEvents";
import BottomNavigation from "../components/BottomNavigation";

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
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Navigation;
