import { useState } from "react";

const WeekDates = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const getCurrentWeek = () => {
    const week = [];
    const current = new Date();
    let day = new Date(
      current.setDate(current.getDate() - current.getDay() + 1)
    );

    for (let i = 0; i < 7; i++) {
      week.push({
        weekday: day.toLocaleDateString("en-US", { weekday: "short" }),
        date: day.toLocaleDateString("en-US", { day: "numeric" }),
        dateISO: day.toISOString().split("T")[0],
      });

      day.setDate(day.getDate() + 1);
    }

    return week;
  };

  return (
    <ul className="flex justify-between mb-8">
      {getCurrentWeek().map((week) => {
        return (
          <li key={week.dateISO}>
            <a
              onClick={() => setSelectedDate(week.dateISO)}
              className={`flex flex-col items-center gap-2 border-b-2 border-transparent hover:cursor-pointer no-underline ${
                selectedDate === week.dateISO &&
                "border-accent-green text-accent-green"
              }`}
            >
              <span className="text-sm">{week.weekday}</span>
              <span className="font-bold">{week.date}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default WeekDates;
