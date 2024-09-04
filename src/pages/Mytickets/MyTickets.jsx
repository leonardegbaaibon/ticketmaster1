// src/components/MyTickets.js

import React, { useState } from 'react';
import HorizontalScroll from './HorizontalScroll';
import BottomSheet from './BottomSheet';
import TransferTicketBottomSheet from './TransferTicketBottomSheet';
import TransferTicketFormBottomSheet from './TransferTicketFormBottomSheet';

const MyTickets = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [isTransferSheetOpen, setTransferSheetOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([5, 6, 7]); // Example seats

  // Function to open the first BottomSheet
  const openBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  // Function to close the first BottomSheet and open the TransferTicketBottomSheet
  const handleTransferClick = () => {
    setBottomSheetOpen(false);
    setTransferSheetOpen(true);
  };

  // Function to close all bottom sheets
  const closeAllSheets = () => {
    setBottomSheetOpen(false);
    setTransferSheetOpen(false);
  };

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const handleTransfer = () => {
    // Handle the transfer logic here
    console.log('Transferring tickets...');
    closeForm();
  };

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
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={closeAllSheets}
        onTransfer={handleTransferClick} // Pass the transfer click handler to BottomSheet
      />

      {/* TransferTicketBottomSheet */}
      <TransferTicketBottomSheet
        isOpen={isTransferSheetOpen}
        onClose={closeAllSheets} // Ensure this closes the transfer sheet as well
        onManualEntryClick={openForm} // Pass the openForm function to handle manual entry click
      />

      {/* TransferTicketFormBottomSheet */}
      <TransferTicketFormBottomSheet
        isOpen={isFormOpen}
        onClose={closeForm}
        selectedSeats={selectedSeats}
        onTransfer={handleTransfer}
      />
      
    </div>
  );
};

export default MyTickets;
