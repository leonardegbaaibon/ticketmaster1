import React, { useState } from 'react';
import TabNavigator from './TabNavigator';
import EventCard from './EventCard';

const MyEvents = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className='flex justify-center'>
      <div className="min-h-screen bg-white w-screen md:w-2/5">
        <TabNavigator activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-4">
          {activeTab === 'upcoming' && (
            <div className="space-y-4">
              <EventCard />
              {/* Repeat EventCard for more events */}
            </div>
          )}
          {activeTab === 'past' && (
            <div className="text-center text-gray-500">
              No past events
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyEvents