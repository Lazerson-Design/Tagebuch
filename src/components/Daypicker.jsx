import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Daypicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <style>
        {`
          .rdp-root {
            --rdp-accent-color: #00b29f; /* Custom accent color */
            --rdp-accent-background-color: #e5f9f7; /* Optional: lighter background for selected days */
            --rdp-today-color: #00b29f; /* Color for today's date */
            --rdp-selected-border: 20px solid #00b29f; /* Border color for selected days */
            --rdp-today-color: #000;
          }
        `}
      </style>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
    </div>
  );
};

export default Daypicker;
