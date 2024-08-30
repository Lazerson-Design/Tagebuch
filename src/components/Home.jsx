import EntryCards from "./EntryCards";
import TodayDate from "./TodayDate";
import WeekDates from "./WeekDates";
import Entry from "./Entry";
import { useState } from "react";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  return (
    <>
      <div className="w-96 m-auto flex justify-between py-10">
        <TodayDate />
        <Entry />
      </div>
      <WeekDates
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <EntryCards selectedDate={selectedDate} />
    </>
  );
};

export default Home;
