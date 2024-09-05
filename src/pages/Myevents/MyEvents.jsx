import React, { useState } from "react";
import TabNavigator from "./TabNavigator";
import EventCard from "./EventCard";
import { AiOutlineClose } from "react-icons/ai";

const MyEvents = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="flex justify-center">
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
    </div>
  );
};

export default MyEvents;
