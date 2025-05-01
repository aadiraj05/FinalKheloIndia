import React from "react";
import kheloLogo from "/src/assets/Logo.png";
 // add 10 such images

const players = [
  { name: "Ravi Kumar", sport: "Badminton"},
  { name: "Priya Verma", sport: "Archery"},
  { name: "Amit Singh", sport: "Badminton"},
  { name: "Nisha Kumari", sport: "Archery"},
  { name: "Sandeep Yadav", sport: "Badminton"},
  { name: "Pooja Sinha", sport: "Archery"},
  { name: "Manoj Das", sport: "Badminton"},
  { name: "Kajal Kumari", sport: "Archery"},
  { name: "Rajeev Ranjan", sport: "Badminton"},
  { name: "Sunita Kumari", sport: "Archery"},
  { name: "Sunita Kumari", sport: "Archery"},
  { name: "Sunita Kumari", sport: "Archery"},
];

const PlayerDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-40 backdrop-blur-md z-50 flex items-center justify-center overflow-auto">
      <div className="bg-white/40 backdrop-blur-3xl border border-gray-100 rounded-3xl shadow-2xl p-6 w-full max-w-5xl relative">
        <button
          className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-xl font-bold"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="flex justify-center mb-6">
          <img src={kheloLogo} alt="Khelo India Bihar" className="h-20" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Bihar Players Spotlight
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center"
            >
              
              <h3 className="text-lg font-semibold text-gray-700">{player.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{player.sport}</p>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsModal;
