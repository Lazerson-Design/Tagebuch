import { useEffect, useState } from "react";
import { getEntriesByDate } from "../utils/localStorage";
import DisplayE from "./DisplayE";

const EntryCards = ({ selectedDate, addEntry }) => {
  const [entries, setEntries] = useState(null);
  console.log(entries);

  const [openModul, setOpenModul] = useState(false);

  useEffect(() => {
    const data = getEntriesByDate(selectedDate);
    setEntries(data);
  }, [selectedDate, addEntry]);

  return (
    <div className="w-96 m-auto flex flex-col gap-8">
      {entries &&
        entries.map((entry) => {
          return (
            <>
              <div
                onClick={() => {
                  setOpenModul(true);
                }}
                key={entry.title}
                className="card bg-entry-blue w-96 shadow-xl"
              >
                <figure className="px-10 pt-10">
                  <img src={entry.image} alt="Task" className="rounded-xl" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{entry.title}</h2>
                  <p className="text-gray-600">
                    <span className="font-bold">Date: </span>{" "}
                    {new Date(entry.date).toLocaleString("de-DE", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-600">{entry.content}</p>
                </div>
              </div>
              {openModul && (
                <DisplayE entry={entry} setOpenModul={setOpenModul} />
              )}
            </>
          );
        })}
    </div>
  );
};

export default EntryCards;
