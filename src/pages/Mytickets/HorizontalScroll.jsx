// src/components/HorizontalScroll.js
import React from 'react';
import TicketCard from './TicketCard';

const HorizontalScroll = () => {
  return (
    <div className="overflow-x-auto flex">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      {/* Add more TicketCard components as needed */}
    </div>
  );
};

export default HorizontalScroll;
