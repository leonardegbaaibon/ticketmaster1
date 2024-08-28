// src/components/MyTickets.js
import React, { useState } from 'react';
import HorizontalScroll from './HorizontalScroll';
import BottomSheet from './BottomSheet';

const MyTickets = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const openBottomSheet = () => setIsBottomSheetOpen(true);
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center bg-black text-white py-4 px-6">
        <div className="text-lg">My Tickets</div>
        <div className="text-lg">Help</div>
      </div>
      <div className="flex justify-center">
        <HorizontalScroll />
      </div>
      <div className="flex justify-start mt-4">
        <button
          className="bg-blue-500 text-white my-8 ml-5 rounded-md py-4 px-10"
          onClick={openBottomSheet}
        >
          Transfer
        </button>
      </div>

      {/* Bottom Sheet Component */}
      <BottomSheet isOpen={isBottomSheetOpen} onClose={closeBottomSheet} />
    </div>
  );
};

export default MyTickets;
