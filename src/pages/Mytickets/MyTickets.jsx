import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import HorizontalScroll from './HorizontalScroll';
import BottomSheet from './BottomSheet';
import TransferTicketBottomSheet from './TransferTicketBottomSheet';
import TransferTicketFormBottomSheet from './TransferTicketFormBottomSheet';
import { AiOutlineClose } from 'react-icons/ai';

const MyTickets = () => {
  const { state } = useLocation();
  const { selectedEvent } = state || {};
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [isTransferSheetOpen, setTransferSheetOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [eventDetails, setEventDetails] = useState({});

  const openBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  const handleTransferClick = () => {
    setBottomSheetOpen(false);
    setTransferSheetOpen(true);
  };

  const handleSeatSelection = (seats, sec, row) => {
    setSelectedSeats(seats);
    setEventDetails({ sec, row });
    setBottomSheetOpen(false);
    setTransferSheetOpen(true);
  };

  const closeAllSheets = () => {
    setBottomSheetOpen(false);
    setTransferSheetOpen(false);
    setIsFormOpen(false);
  };

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const handleTransfer = () => {
    console.log('Transferring tickets...');
    closeForm();
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-100"
      initial={{ opacity: 0, y: 20 }} // Initial state for animation
      animate={{ opacity: 1, y: 0 }} // End state for animation
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="flex justify-between items-center bg-black text-white py-4 px-6">
        <AiOutlineClose size={24} color="white" />
        <div className="text-lg">My Tickets</div>
        <div className="text-lg">Help</div>
      </div>
      <div className="flex justify-center">
        <HorizontalScroll tickets={selectedEvent} />
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white my-8 ml-5 rounded-md py-3 px-12"
          onClick={openBottomSheet}
        >
          Transfer
        </button>
        <button
          className="bg-white text-gray-200 my-8 mr-5 rounded-md py-3 px-16"
        >
          Sell
        </button>
      </div>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={closeAllSheets}
        seats={selectedEvent}
        onTransfer={handleSeatSelection}
      />

      <TransferTicketBottomSheet
        isOpen={isTransferSheetOpen}
        onClose={closeAllSheets}
        onManualEntryClick={openForm}
      />

      <TransferTicketFormBottomSheet
        isOpen={isFormOpen}
        onClose={closeForm}
        selectedSeats={selectedSeats}
        eventDetails={eventDetails}
        onTransfer={handleTransfer}
      />
    </motion.div>
  );
};

export default MyTickets;
