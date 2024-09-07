import React, { useState, useRef, useEffect } from 'react';
import TicketCard from './TicketCard';

const HorizontalScroll = ({ tickets }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Update the active index based on scroll position
  const updateActiveIndex = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / tickets.sit.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener('scroll', updateActiveIndex);

    return () => {
      container.removeEventListener('scroll', updateActiveIndex);
    };
  }, [tickets.sit.length]);

  const handleDotClick = (index) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / tickets.sit.length;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
      });
    }
  };

  // Map the tickets.sit array to display individual tickets
  const splitTickets = tickets.sit.map((seat, index) => ({
    ...tickets,
    seat, // Add the seat number to the ticket
  }));

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex overflow-x-auto scroll-smooth whitespace-nowrap"
        ref={scrollRef}
        style={{ paddingBottom: '40px' }} // Ensuring space for pagination dots
      >
        {splitTickets.length > 0 ? (
          splitTickets.map((ticket, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] mx-4" // Increased margin for spacing
              style={{ display: 'inline-block' }}
            >
              <TicketCard ticket={ticket} />
            </div>
          ))
        ) : (
          <div>No tickets available</div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
        {splitTickets.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? 'bg-gray-500' : 'bg-gray-200'
            }`}
            style={{ margin: '0 4px' }} // Add spacing between dots
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
