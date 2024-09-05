import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // To access navigation state
import HorizontalScroll from './HorizontalScroll';
import BottomSheet from './BottomSheet';
import TransferTicketBottomSheet from './TransferTicketBottomSheet';
import TransferTicketFormBottomSheet from './TransferTicketFormBottomSheet';
import { AiOutlineClose } from 'react-icons/ai';

const MyTickets = () => {
  const { state } = useLocation(); // Access navigation state
  const { selectedEvent } = state || {}; // Destructure selectedEvent from state
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [isTransferSheetOpen, setTransferSheetOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]); // Manage selected seats here
  const [eventDetails, setEventDetails] = useState({}); // For sec and row data

  // Function to open the first BottomSheet
  const openBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  // Function to close the first BottomSheet and open the TransferTicketBottomSheet
  const handleTransferClick = () => {
    setBottomSheetOpen(false);
    setTransferSheetOpen(true);
  };

  // Function to handle seat selection and pass to form
  const handleSeatSelection = (seats, sec, row) => {
    setSelectedSeats(seats);
    setEventDetails({ sec, row });
    setBottomSheetOpen(false);
    setTransferSheetOpen(true);
  };

  // Function to close all bottom sheets
  const closeAllSheets = () => {
    setBottomSheetOpen(false);
    setTransferSheetOpen(false);
    setIsFormOpen(false);
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
        <AiOutlineClose size={24} color="white" />
        <div className="text-lg">My Tickets</div>
        <div className="text-lg">Help</div>
      </div>
      <div className="flex justify-center">
        <HorizontalScroll tickets={selectedEvent} />
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
        seats={selectedEvent}
        onTransfer={handleSeatSelection} // Pass seat selection handler to BottomSheet
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
        selectedSeats={selectedSeats} // Pass the selected seats
        eventDetails={eventDetails} // Pass the section and row
        onTransfer={handleTransfer}
      />
    </div>
  );
};

export default MyTickets;
