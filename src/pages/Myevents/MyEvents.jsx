import React, { useState } from "react";
import { motion } from "framer-motion";
import TabNavigator from "./TabNavigator";
import EventCard from "./EventCard";
import { AiOutlineClose } from "react-icons/ai";
import SplashScreen from "./SplashScreen";
import PasswordModal from "./PasswordModal";
// import PasswordModal from "./PasswordModal"; // Import PasswordModal

const MyEvents = ({ setSelectedEvent, setActiveComponent }) => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isLoading, setIsLoading] = useState(true);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(true); // Manage password modal state

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handlePasswordSubmit = (password) => {
    if (password === "kwanzatickets123@") {
      setPasswordModalOpen(false); // Close modal if password is correct
    } else {
      alert("Incorrect password! Please try again.");
    }
  };

  return (
    <>
      <SplashScreen isLoading={isLoading} onLoadComplete={handleLoadComplete} />

      {isPasswordModalOpen && (
        <PasswordModal onSubmit={handlePasswordSubmit} />
      )}

      {!isPasswordModalOpen && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="min-h-screen bg-[#005DDB] w-screen md:w-2/5">
            <div className="flex justify-between items-center bg-black text-white py-2 px-6">
              <AiOutlineClose size={24} color="transparent" />
              <div className="text-lg">My Tickets</div>
              <div className="text-lg">Help</div>
            </div>
            <TabNavigator activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="p-4">
              {activeTab === "upcoming" && (
                <div className="space-y-4">
                  <EventCard
                    setSelectedEvent={setSelectedEvent}
                    setActiveComponent={setActiveComponent}
                  />
                </div>
              )}
              {activeTab === "past" && (
                <div className="text-center text-gray-500">No past events</div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MyEvents;
