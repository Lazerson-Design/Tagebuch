import { useEffect, useState } from "react";
import { getEntriesByDate } from "../utils/localStorage";
import EntryCard from "./EntryCard";

const EntryCards = ({ selectedDate, addEntry }) => {
  const [entries, setEntries] = useState(null);
  // console.log(entries);

  const [openModul, setOpenModul] = useState(false);

  useEffect(() => {
    const data = getEntriesByDate(selectedDate);
    setEntries(data);
  }, [selectedDate, addEntry]);

  return (
    <div className="w-96 m-auto flex flex-col gap-8">
      {entries &&
        entries.map((entry) => {
          return <EntryCard entry={entry} />;
        })}
    </div>
  );
};

export default EntryCards;
