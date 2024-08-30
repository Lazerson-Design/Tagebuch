import { useState } from "react";

const getStartDate = () => {
  const current = new Date();
  return new Date(current.setDate(current.getDate() - current.getDay() + 1));
};

const WeekDates = ({ selectedDate, setSelectedDate }) => {
  const [startDate, setStartDate] = useState(getStartDate());

  const getCurrentWeek = () => {
    const week = [];
    let startDay = new Date(startDate);

    for (let i = 0; i < 7; i++) {
      week.push({
        weekday: startDay.toLocaleDateString("en-US", { weekday: "short" }),
        date: startDay.toLocaleDateString("en-US", { day: "numeric" }),
        dateISO: startDay.toISOString().split("T")[0],
      });

      startDay.setDate(startDay.getDate() + 1);
    }

    return week;
  };

  const prevWeekHandle = () => {
    setStartDate((prev) => {
      const date = new Date(prev);
      date.setDate(date.getDate() - 7);
      return date;
    });
  };

  const nextWeekHandle = () => {
    setStartDate((prev) => {
      const date = new Date(prev);
      date.setDate(date.getDate() + 7);
      return date;
    });
  };

  return (
    <ul className="w-[34rem] m-auto flex justify-between mb-8">
      <button className="btn btn-circle" onClick={prevWeekHandle}>
        ❮
      </button>
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
      <button className="btn btn-circle" onClick={nextWeekHandle}>
        ❯
      </button>
    </ul>
  );
};

export default WeekDates;
