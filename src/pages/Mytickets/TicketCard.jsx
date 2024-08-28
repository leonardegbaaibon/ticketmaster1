import React from "react";
import Viewer from '../../assets/Viewer.svg'


const TicketCard = () => {
  return (
    <div className="w-80 bg-white shadow-md rounded-lg m-2 ml-5">
      <div>
        <div className="bg-blue-600 flex justify-around rounded-t-lg py-2">
          <span className="text-center">Official Platinum</span>
        </div>
        <div className="bg-blue-500 flex justify-around py-5">
          <div className="top-2 left-2 text-white">
            <div className="text-xs">SEC</div>
            <div className="text-lg font-bold">H</div>
          </div>
          <div className="top-2 left-12 text-white">
            <div className="text-xs">ROW</div>
            <div className="text-lg font-bold">B</div>
          </div>
          <div className="top-2 left-24 text-white">
            <div className="text-xs">SEAT</div>
            <div className="text-lg font-bold">B</div>
          </div>
        </div>

        <div className="relative w-80 h-64">
          <img
            src="https://www.experian.com/content/dam/marketing/na/assets/im/rental/couple-talking-drinks-new-house.jpg"
            alt="Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-t-lg"></div>

          {/* Section, Row, and Seat info */}

          {/* Bottom text: B and B • B */}
          <div className="absolute bottom-4 w-full text-center text-white">
            <div className="text-lg font-bold">B</div>
            <div className="text-sm">B • B</div>
          </div>
        </div>

        {/* Middle Section: Letter and Buttons */}
        <div className="p-4">
          <div className="flex justify-center items-center my-2">
            <div className="text-lg text-gray-700 font-medium">Floor Section</div>
          </div>
          <button className="w-full bg-blue-500 text-white flex justify-center rounded-md py-2">
            <img src={Viewer} alt="" width={27} height={27} className="mx-2" />
            <span>View Ticket</span>
          </button>
          <p className="text-blue-500 text-center mt-2">Ticket Details</p>
        </div>

        {/* Bottom Verification */}
        <div className="bg-blue-500 rounded-b-lg py-2">
          <i className="text-white text-sm">ticketmaster verified</i>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
