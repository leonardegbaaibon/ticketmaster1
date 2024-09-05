// TransferTicketBottomSheet.js

import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // X or close icon
import { IoIosAddCircleOutline } from "react-icons/io";
import Ticket from '../../assets/Frame.svg';
import Ashplane from '../../assets/ashplane.jpg';


const TransferTicketBottomSheet = ({ isOpen, onClose, onManualEntryClick }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-10 transition-opacity duration-300 ${
        isOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing on content click
      >
        {/* Bottom Sheet Content */}
        <div className="h-[70vh] pt-2 px-6 mb-20">
          <div className="flex justify-between items-center text-lg font-medium">
            <span className="text-transparent">x</span>
            <span className="text-gray-600">TRANSFER TICKET</span>
            <button className="text-xl text-gray-600" onClick={onClose}>
              <AiOutlineClose size={24} color="gray" />
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-4">
            <button className="w-full flex justify-center items-center py-3 px-4 border border-blue-600 text-blue-600">
              <span className="">Select From Contacts</span>
              <img src={Ticket} alt="Ticket Icon" className="w-5 h-6 mx-2" />
            </button>
            <button
              className="w-full flex justify-center items-center py-3 px-4 border border-blue-600 text-blue-600"
              onClick={onManualEntryClick} // Handle button click to open the form
            >
              <span>Manually Enter A Recipient</span>
              <IoIosAddCircleOutline size={24} className="text-blue-600 mx-1" />
            </button>
          </div>

          {/* Instruction Section */}
          <div className="text-center mt-12">
            <div className="flex justify-center">
              <div
                className="p-5 bg-[#EEECEF] align-center mb-5"
                style={{ borderRadius: 100 }}
              >
                <img
                  src={Ashplane} // Replace with your actual icon
                  alt="Transfer Icon"
                  className="w-12 h-12 mx-auto"
                />
              </div>
            </div>
            <span className="mt-4">
              <span className="text-sm font-bold text-gray-400">
                Transfer Tickets Via Email or Text Message.
              </span>
              <br />
              <span className="text-gray-500">
                Select an Email or mobile number to transfer tickets to your
                recipient.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferTicketBottomSheet;
