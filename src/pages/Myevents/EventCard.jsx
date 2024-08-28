// src/components/EventCard.js
import React from 'react';
import Ticket from '../../assets/ticket.svg'

const EventCard = () => {
  return (
    <div className="relative w-full h-64">
      <img src="https://via.placeholder.com/300" alt="Event" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-lg font-bold">Event Title</h3>
        <div className='flex '>
          <img src={Ticket} />
        <span className='pl-1'>3 tickets</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
