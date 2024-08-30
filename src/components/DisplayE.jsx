import React from "react";

const DisplayE = ({ entry, setOpenModul }) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn">open modal</button>
      <dialog id="my_modal_1" className="modal modal-open">
        <div className="modal-box">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={entry.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{entry.title}</h2>
              <p className="py-4">
                {new Date(entry.date).toLocaleString("de-DE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
              </p>
              <p>{entry.content}</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn"
                onClick={() => {
                  setOpenModul(false);
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DisplayE;
