import { useState } from "react";
import Daypicker from "./Daypicker";

function Entry() {
  // Textarea benutzt State um Eintrag zu speichern
  const [diaryEntry, setDiaryEntry] = useState("");

  // Datumeingabe
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Funktion öffnet Modal wenn "Add Entry" ist geklickt
  const openModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  // Function liest Textarea und updated State
  const handleChange = (event) => {
    setDiaryEntry(event.target.value); // Momentaner Wert der textarea
  };

  // Function fürs Abschicken
  const handleSubmit = (event) => {
    event.preventDefault(); // Verhindert den Default
    console.log("Diary Entry Submitted:", diaryEntry); // Logt die Textarea zum Zeitpunkt der Submission
    document.getElementById("my_modal_1").close(); // Modal schließen nach der Submission
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button className="btn btn-success" onClick={openModal}>
        Add Entry
      </button>

      {/* Modal Structure */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          <form method="dialog">
            {/* Close button (X) */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Dear Diary...</h3>
          {/* Input Title */}
          <input
            type="text"
            placeholder="What A Day"
            className="input input-bordered w-full mb-4"
          />
          {/* Textarea Input */}
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="today was a great day..."
            value={diaryEntry} // The value of the textarea comes from the state
            onChange={handleChange} // Handle changes to the textarea
          ></textarea>

          {/* Datum */}
          <Daypicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <div className="modal-action">
            <form method="dialog" onSubmit={handleSubmit}>
              {/* Button to submit the entry */}
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Modal backdrop that closes the modal when clicked */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Entry;
