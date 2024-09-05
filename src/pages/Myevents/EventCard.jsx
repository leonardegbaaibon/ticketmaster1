import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // For navigation
import Ticket from "../../assets/ticket.svg";

const EventCard = () => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Retrieve tickets from localStorage
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTickets);
  }, []);

  if (tickets.length === 0) {
    return <div>No ticket data available.</div>;
  }

  const handleEventClick = (ticket) => {
    navigate('/mytickets', { state: { selectedEvent: ticket } });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tickets.map((ticket, index) => {
        // Extract date and time components
        // const date = new Date(ticket.dateTime);
        // const day = date.toLocaleDateString(undefined, { day: "2-digit" });
        // const month = date.toLocaleDateString(undefined, { month: "short" });
        // const time = date.toLocaleTimeString(undefined, {
        //   hour: "2-digit",
        //   minute: "2-digit",
        // });

        return (
          <div
            key={index}
            className="relative w-full h-64 cursor-pointer"
            onClick={() => handleEventClick(ticket)} // Add click handler
          >
            <img
              src={ticket.imageUrl}
              alt="Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-lg text-start font-medium">{ticket.title}</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex" style={{fontSize: 13}}>
                      <p>{ticket.dateTime}</p>
                      <p className="px-1">.</p>
                      <p>{ticket.venue}</p>
                    </div>
                    <div className="flex justify-start items-center">
                      <img src={Ticket} alt="Ticket Icon" />
                      <span className="pl-1" style={{fontSize: 13}}>
                        {(ticket.sit).length} tickets
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventCard;
