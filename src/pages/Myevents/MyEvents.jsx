import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import TabNavigator from "./TabNavigator";
import EventCard from "./EventCard";
import { AiOutlineClose } from "react-icons/ai";
import SplashScreen from "./SplashScreen";
// import SplashScreen from "./"; // Import SplashScreen component

const MyEvents = () => {
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
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // End state for animation
        transition={{ duration: 0.5 }} // Duration of the animation
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
                <EventCard />
                {/* Repeat EventCard for more events */}
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
