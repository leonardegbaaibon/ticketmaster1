import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Ticket from '../../assets/ticket2.svg';
import { MdOutlineCheck } from 'react-icons/md';
import { PiWarningCircleFill } from 'react-icons/pi';

const BottomSheet = ({ isOpen, onClose, seats = [], onTransfer }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-0 transition-opacity ${
        isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white transition-transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[70vh] flex flex-col mb-12 justify-between">
          <div>
            <div className="flex justify-between items-center mt-2 text-center text-gray-600 text-lg font-semibold mb-2">
              <span className="text-2xl px-4 text-transparent">x</span>
              <span>SELECT TICKET TO TRANSFER</span>
              <button className="text-2xl px-4" onClick={onClose}>
                <AiOutlineClose size={24} color="gray" />
              </button>
            </div>
            <div className="w-screen h-1 bg-gray-300 rounded-full mb-4"></div>

            <div className="border-2 border-gray-600 m-4 p-4 flex items-start mb-4">
              <div className="p-0 rounded-full mr-4">
                <PiWarningCircleFill size={24} color="#b4b4b4" style={{ borderRadius: 100 }} />
              </div>
              <div className="text-gray-600 text-start text-sm">
                Only transfer tickets to people you know and trust to ensure
                everyone stays safe and socially distanced.
              </div>
            </div>

            <div className="flex justify-between items-center m-4 mb-4">
              <div className="text-sm font-medium text-gray-600">
                {seats.length} Tickets
              </div>
              <div className="text-sm font-medium text-gray-600 flex pr-2">
                <img src={Ticket} alt="Ticket Icon" />
              </div>
            </div>

            <div className="flex flex-wrap justify-start">
              {seats.map((seatId, index) => (
                <div key={index} className="text-center ml-4 mb-4 rounded-lg shadow-xl">
                  <div
                    onClick={() => handleSeatSelect(seatId)}
                    className={`cursor-pointer py-2 px-4 flex items-center justify-center space-x-2 ${
                      selectedSeats.includes(seatId)
                        ? 'bg-blue-500 border-blue-600 text-white'
                        : 'bg-blue-500 border-blue-500 text-white'
                    }`}
                  >
                    <span>SEAT {seatId}</span>
                  </div>
                  <span
                    className={`custom-radio-button my-2 px-1 py-1 ${
                      selectedSeats.includes(seatId) ? 'bg-blue-500' : ''
                    }`}
                  >
                    <b className="text-white" style={{ fontSize: '13px' }}>
                      <MdOutlineCheck size={24} />
                    </b>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-300 p-4 flex justify-between items-center bg-gray-100">
            <div className="text-sm text-gray-600">
              {selectedSeats.length} selected
            </div>
            <button
              className={`rounded-md text-sm font-bold py-2 px-4 bg-gray-200 text-gray-500`}
              onClick={() => onTransfer(selectedSeats)} // Pass selected seats to handler
              disabled={selectedSeats.length === 0}
            >
              TRANSFER TO {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
