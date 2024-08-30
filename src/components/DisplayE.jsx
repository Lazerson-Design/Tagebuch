import React from "react";

const DisplayE = ({ entry, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={entry.image}
        alt={entry.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-bold mt-2">{entry.title}</h2>
      <p className="text-gray-500">
        {new Date(entry.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default DisplayE;
