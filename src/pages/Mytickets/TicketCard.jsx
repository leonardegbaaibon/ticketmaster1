import React from 'react';
import Viewer from '../../assets/Viewer.svg';
import Tote from '../../assets/tote.jpg';

const TicketCard = ({ ticket }) => {
  return (
    <div className="w-80 bg-white shadow-md rounded-lg m-2 ml-5">
      <div>
        <div className="bg-[#0051BF] flex justify-around rounded-t-lg py-2">
          <span className="text-center">{ticket.heading}</span>
        </div>
        <div className="bg-[#005DDB] flex justify-around py-3">
          <div className="top-2 left-2 text-white">
            <div className="text-xs">SEC</div>
            <div className="text-lg font-bold">{ticket.sec}</div>
          </div>
          <div className="top-2 left-12 text-white">
            <div className="text-xs">ROW</div>
            <div className="text-lg font-bold">{ticket.row}</div>
          </div>
          <div className="top-2 left-24 text-white">
            <div className="text-xs">SEAT</div>
            <div className="text-lg font-bold">{ticket.seat}</div>
          </div>
        </div>

        <div className="relative w-80 h-48">
          <img
            src={ticket.imageUrl}
            alt="Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-t-lg"></div>

          <div className="absolute bottom-4 w-full text-center text-white">
            <div className="text-lg font-bold break-words whitespace-normal">{ticket.title}</div> {/* Added break-words and whitespace-normal */}
            <div className="text-sm whitespace-normal">
              {`${ticket.dateTime} • ${ticket.venue}`}
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="flex justify-center items-center my-1">
            <div className="text-lg text-gray-700 font-medium">{ticket.midSection}</div>
          </div>
          <button className="w-full bg-[#005DDB] text-white flex justify-center rounded-md py-2">
            <img src={Viewer} alt="" width={27} height={27} className="mx-2" />
            <span>View Ticket</span>
          </button>
          <p className="text-[#005DDB] text-center mt-2">Ticket Details</p>
        </div>

        <div className="bg-[#005DDB] rounded-b-lg py-1 flex justify-center">
          <img src={Tote} alt="" height={5} width={20}/>
          <i className="text-white text-sm">ticketmaster verified</i>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
