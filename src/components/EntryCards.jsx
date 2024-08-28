import tasksData from "../data/tasks";

const EntryCards = () => {
  return (
    <div className="flex flex-col gap-8">
      {tasksData &&
        tasksData.map((entry) => {
          return (
            <div key={entry.id} className="card bg-entry-blue w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={entry.image} alt="Task" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{entry.title}</h2>
                <p className="text-gray-600">{entry.content}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default EntryCards;
