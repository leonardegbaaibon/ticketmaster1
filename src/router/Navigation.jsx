import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MyEvents from "../pages/Myevents/myEvents";
import MyTickets from "../pages/Mytickets/MyTickets";
import ForYou from "../pages/ForYou";
import Sell from "../pages/Sell";
import MyAccounts from "../pages/MyAccounts";
import BottomNavigation from "../components/BottomNavigation";

const Navigation = () => {
  return (
    <div className="pb-16">
      <Routes>
        {/* Redirect root to /discover */}
        <Route path="/" element={<Navigate to="/discover" />} />
        {/* Main routes */}
        <Route path="/discover" element={<MyTickets />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/myaccount" element={<MyAccounts />} />
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Navigation;
