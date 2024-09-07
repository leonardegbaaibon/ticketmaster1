import React, { useState } from "react";
import MyTickets from "../pages/Mytickets/MyTickets";
import ForYou from "../pages/ForYou";
import Sell from "../pages/Sell";
import MyAccounts from "../pages/MyAccounts";
import MyEvents from "../pages/Myevents/MyEvents";
import BottomNavigation from "../components/BottomNavigation";
import { AnimatePresence } from "framer-motion";
import TicketForm from "../pages/TicketForm";

const Navigation = () => {
  const [activeComponent, setActiveComponent] = useState("MyEvents");
  const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event

  console.log(selectedEvent,activeComponent)

  const renderComponent = () => {
    switch (activeComponent) {
      case "MyEvents":
        return <MyEvents setSelectedEvent={setSelectedEvent} setActiveComponent={setActiveComponent} />;
      case "MyTickets":
        return <MyTickets selectedEvent={selectedEvent} />; // Pass the selected event
      case "ForYou":
        return <ForYou />;
      case "Sell":
        return <Sell />;
      case "MyAccounts":
        return <TicketForm />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="pb-16">
      <AnimatePresence>{renderComponent()}</AnimatePresence>
      <BottomNavigation
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
      />
    </div>
  );
};

export default Navigation;
