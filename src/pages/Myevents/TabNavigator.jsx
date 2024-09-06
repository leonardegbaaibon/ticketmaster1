import React, { useEffect, useState } from 'react';

const TabNavigator = ({ activeTab, setActiveTab }) => {
  const [upcomingCount, setUpcomingCount] = useState(0);

  useEffect(() => {
    // Retrieve tickets from localStorage
    const storedTickets = localStorage.getItem('tickets');
    
    if (storedTickets) {
      const tickets = JSON.parse(storedTickets);
      // Update the count of upcoming tickets based on the tickets array length
      setUpcomingCount(tickets.length);
    }
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="flex justify-center bg-black text-white">
      <button 
        className={`flex-1 border-b-4 bg-blue-500 w-full py-2 ${activeTab === 'upcoming' ? 'border-white' : 'border-blue-500'}`}
        onClick={() => setActiveTab('upcoming')}
      >
        UPCOMING({upcomingCount})
      </button>
      <button 
        className={`flex-1 border-b-4 bg-blue-500 w-full py-2 ${activeTab === 'past' ? 'border-white' : 'border-blue-500'}`}
        onClick={() => setActiveTab('past')}
      >
        PAST(0)
      </button>
    </div>
  );
};

export default TabNavigator;
