import React from "react";
import { Routes, Route } from "react-router-dom";
import MyTickets from "../pages/Mytickets/MyTickets";
import ForYou from "../pages/ForYou";
import Sell from "../pages/Sell";
import MyAccounts from "../pages/MyAccounts";
import Home from "../pages/Home";
import MyEvents from "../pages/Myevents/MyEvents";
import BottomNavigation from "../components/BottomNavigation";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  return (
    <div className="pb-16">
      <AnimatePresence>
        <Routes>
          {/* MyEvents Page */}
          <Route
            path="/"
            element={
                <MyEvents />
            }
          />
          {/* MyTickets Page */}
          <Route
            path="/mytickets"
            element={
              <motion.div
                initial={{ opacity: 0, y: 100 }}  // Start from the bottom of the screen
                animate={{ opacity: 1, y: 0 }}    // Animate to the top
                exit={{ opacity: 0, y: 100 }}     // Exit back to the bottom
                transition={{ duration: 1.5 }}    // Make the transition slow and obvious
              >
                <MyTickets />
              </motion.div>
            }
          />
          {/* Other routes */}
          <Route path="/foryou" element={<ForYou />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/myaccount" element={<MyAccounts />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </AnimatePresence>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Navigation;
