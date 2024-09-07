import React, { useState } from "react";
import { motion } from "framer-motion";
import TabNavigator from "./TabNavigator";
import EventCard from "./EventCard";
import { AiOutlineClose } from "react-icons/ai";
import SplashScreen from "./SplashScreen";

const MyEvents = ({ setSelectedEvent, setActiveComponent }) => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <SplashScreen isLoading={isLoading} onLoadComplete={handleLoadComplete} />
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="min-h-screen bg-white w-screen md:w-2/5">
          <div className="flex justify-between items-center bg-black text-white py-2 px-6">
            <AiOutlineClose size={24} color="transparent" />
            <div className="text-lg">My Tickets</div>
            <div className="text-lg">Help</div>
          </div>
          <TabNavigator activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="p-4">
            {activeTab === "upcoming" && (
              <div className="space-y-4">
                <EventCard setSelectedEvent={setSelectedEvent} setActiveComponent={setActiveComponent} />
              </div>
            )}
            {activeTab === "past" && (
              <div className="text-center text-gray-500">No past events</div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyEvents;
