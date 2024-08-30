import React from "react";

const DisplayE = ({ entry, setOpenModul }) => {
  return (
    <>
      <dialog id="my_modal_1" className="modal modal-open">
        <div className="modal-box p-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                setOpenModul(false);
              }}
            >
              ✕
            </button>
          </form>

          <div className="card card-compact w-96">
            <div className="card-body">
              <h2 className="card-title">{entry.title}</h2>
              <p className="py-4">
                <span className="font-bold">Date: </span>
                {new Date(entry.date).toLocaleString("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
              </p>
              <p>{entry.content}</p>
            </div>
            <figure className="px-10">
              <img className="rounded-xl" src={entry.image} alt={entry.title} />
            </figure>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DisplayE;
