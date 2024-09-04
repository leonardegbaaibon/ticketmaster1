import React, { useState } from "react";
import Ticket from '../../assets/ticket2.svg';

const BottomSheet = ({ isOpen, onClose, onTransfer }) => {
  // State to track selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      // If the seat is already selected, deselect it
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      // Otherwise, add the seat to the selected seats
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-0 transition-opacity ${
        isOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing on content click
      >
        {/* Bottom Sheet Content */}
        <div className="h-[70vh] flex flex-col justify-between">
          <div>
            {/* Drag handle */}
            <div className="flex justify-between items-center mt-2 text-center text-gray-600 text-lg font-semibold mb-2">
              <span className="text-2xl px-4 text-transparent">x</span>
              <span>SELECT TICKET TO TRANSFER</span>
              <button className="text-2xl px-4" onClick={onClose}>
                x
              </button>
            </div>
            <div className="w-screen h-1 bg-gray-300 rounded-full mb-4"></div>

            {/* Info Box */}
            <div className="border-2 border-gray-600 m-4 p-4 flex items-start mb-4">
              <div className="bg-gray-300 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8z"
                  ></path>
                </svg>
              </div>
              <div className="text-gray-600 text-start text-sm">
                Only transfer tickets to people you know and trust to ensure
                everyone stays safe and socially distanced.
              </div>
            </div>

            {/* Section, Row, and Ticket Count */}
            <div className="flex justify-between items-center m-4 mb-4">
              <div className="text-sm font-medium text-gray-600">
                Sec H, Row B
              </div>
              <div className="text-sm font-medium text-gray-600 flex pr-2">
                <img src={Ticket} alt="Ticket Icon" />
                <span>3 Tickets</span>
              </div>
            </div>

            {/* Selectable Tickets */}
            <div className="flex justify-start">
              {/* Ticket 1 */}
              <div className="text-center ml-4 rounded-lg shadow-xl">
                <div
                  onClick={() => handleSeatSelect(1)}
                  className={`cursor-pointer py-2 px-4 flex items-center justify-center space-x-2 ${
                    selectedSeats.includes(1)
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "bg-blue-500 border-blue-500 text-white"
                  }`}
                >
                  <span>SEAT B</span>
                </div>
                <span
                  className={`custom-radio-button my-2 px-2 ${
                    selectedSeats.includes(1) ? "selected" : ""
                  }`}
                >
                  <b className="text-white" style={{ fontSize: '13px' }}>✓</b>
                </span>
              </div>

              {/* Ticket 2 */}
              <div className="text-center ml-4 rounded-lg shadow-xl">
                <div
                  onClick={() => handleSeatSelect(2)}
                  className={`cursor-pointer py-2 px-4 flex items-center justify-center space-x-2 ${
                    selectedSeats.includes(2)
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "bg-blue-500 border-blue-500 text-white"
                  }`}
                >
                  <span>SEAT B</span>
                </div>
                <span
                  className={`custom-radio-button my-2 px-2 ${
                    selectedSeats.includes(2) ? "selected" : ""
                  }`}
                >
                  <b className="text-white" style={{ fontSize: '13px' }}>✓</b>
                </span>
              </div>

              {/* Ticket 3 */}
              <div className="text-center ml-4 rounded-lg shadow-xl">
                <div
                  onClick={() => handleSeatSelect(3)}
                  className={`cursor-pointer py-2 px-4 flex items-center justify-center space-x-2 ${
                    selectedSeats.includes(3)
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "bg-blue-500 border-blue-500 text-white"
                  }`}
                >
                  <span>SEAT B</span>
                </div>
                <span
                  className={`custom-radio-button my-2 px-2 ${
                    selectedSeats.includes(3) ? "selected" : ""
                  }`}
                >
                  <b className="text-white" style={{ fontSize: '13px' }}>✓</b>
                </span>
              </div>
            </div>
          </div>

          {/* Selected Ticket Count and Transfer Button */}
          <div className="border-t border-gray-300 p-4 flex justify-between items-center bg-gray-100">
            <div className="text-sm text-gray-600">
              {selectedSeats.length} selected
            </div>
            <button
              className={`rounded-md py-2 px-4 ${
                selectedSeats.length > 0
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
              onClick={onTransfer} // Call the onTransfer function
              disabled={selectedSeats.length === 0} // Disable if no seats selected
            >
              Transfer To {selectedSeats.length > 0 && `(${selectedSeats.length})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
