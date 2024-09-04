import React, { useState } from 'react';

const TransferTicketFormBottomSheet = ({ isOpen, onClose, selectedSeats, onTransfer }) => {
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhoneNumber: '',
    note: '',
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        onClick={(e) => e.stopPropagation()} // Prevent closing on content click
      >
        {/* Bottom Sheet Content */}
        <div className="h-[70vh] flex flex-col justify-between">
          <div>
            {/* Drag handle */}
            <div className="flex justify-between items-center mt-2 text-center text-gray-600 text-lg font-semibold mb-2">
              <span className="text-2xl px-4 text-transparent">x</span>
              <span>TRANSFER TICKET</span>
              <button className="text-2xl px-4" onClick={onClose}>
                x
              </button>
            </div>
            <div className="w-screen h-1 bg-gray-300 rounded-full mb-4"></div>

            {/* Selected Ticket Info */}
            <div className="m-4">
              <div className="text-sm font-medium text-gray-600">
                {`${selectedSeats.length} Tickets selected`}
              </div>
              <div className="text-base font-medium text-gray-600">
                {`Sec A Row 7 seat ${selectedSeats.join(',')}`}
              </div>
            </div>

            {/* Form Fields */}
            <div className="m-4">
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="First Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Last Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Email or Mobile Number
                </label>
                <input
                  type="text"
                  name="emailOrPhoneNumber"
                  value={formData.emailOrPhoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Email or Mobile Number"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Note
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Note"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Transfer Button */}
          <div className="border-t border-gray-300 p-4 flex justify-between items-center bg-gray-100">
            <button
              className="text-sm text-gray-600"
              onClick={onClose}
            >
              {'< Back'}
            </button>
            <button
              className="rounded-md py-2 px-4 bg-blue-500 text-white"
              onClick={onTransfer} // Handle ticket transfer logic here
            >
              {`TRANSFER ${selectedSeats.length} TICKETS`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferTicketFormBottomSheet;
