import React from 'react';
import Archery from '/src/assets/archery_10768188.png';
import BadmintonIcon from '/src/assets/badminton.png';
import { FaLocationDot } from "react-icons/fa6";

const EventCard = () => {
  return (
    <div className="w-full flex flex-wrap gap-6 justify-start items-start mt-10">
      {/* Card 1 */}
      <div className="w-80 max-w-md bg-white border border-gray-200 shadow-xl overflow-hidden rounded-md">
        <div className="flex items-center space-x-4 py-2 px-2">
          <div className="w-12 h-12 flex items-center justify-center rounded-md border bg-gradient-to-r from-[#38a5dd] to-[#d878b1] border-gray-300">
            <img src={BadmintonIcon} alt="badmintonicon" className="w-full h-ful object-contain rotate-90" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-800">Badminton</span>
            <span className="text-sm text-gray-800">05/10/2025 - 05/13/2025</span>
          </div>
        </div>
        <div className="flex items-center p-2">
          <button className="flex w-full items-center text-white text-md bg-gradient-to-r from-[#38a5dd] to-[#d878b1] font-medium px-3 py-1 rounded-md">
            <FaLocationDot className="mr-2 text-white" />
            Sandy's Compound Complex
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-80 max-w-md bg-white border border-gray-200 shadow-xl overflow-hidden rounded-md">
        <div className="flex items-center space-x-4 py-2 px-2">
          <div className="w-12 h-12 flex items-center justify-center rounded-md border bg-gradient-to-r from-[#d878b1] to-[#38a5dd] border-gray-300">
            <img src={Archery} alt="badmintonicon" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-gray-800">Archery</span>
            <span className="text-sm text-gray-800">05/04/2025 - 05/07/2025</span>
          </div>
        </div>
        <div className="flex items-center p-2">
          <button className="flex w-full items-center text-white text-md bg-gradient-to-r from-[#38a5dd] to-[#d878b1] font-medium px-3 py-1 rounded-md">
            <FaLocationDot className="mr-2 text-white" />
            Sandy's Compound Complex
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
