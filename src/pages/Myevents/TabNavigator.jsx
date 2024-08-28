// src/components/TabNavigator.js
import React, { useState } from 'react';

const TabNavigator = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center bg-black text-white">
      <button 
        className={`flex-1 border-b-4 bg-blue-500 w-full py-2 ${activeTab === 'upcoming' ? 'border-white' : 'border-blue-500'}`}
        onClick={() => setActiveTab('upcoming')}
      >
        UPCOMING(1)
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
