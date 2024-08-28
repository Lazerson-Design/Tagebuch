import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Daypicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <style>
        {`
          .rdp-root {
            --rdp-accent-color: #00a96e; /* Custom accent color */
            --rdp-accent-background-color: #e5f9f7; /* Optional: lighter background for selected days */
            --rdp-today-color: #00a96e; /* Color for today's date */
            --rdp-selected-border: 2px solid #00a96e; /* Border color for selected days */
            --rdp-today-color: #00a96e;
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
