import tasksData from "../data/tasks";

const TaskCards = () => {
  return (
    <div className="flex flex-col gap-8">
      {tasksData &&
        tasksData.map((task) => {
          return (
            <div className="card bg-[#eff6ff] w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={task.image} alt="Task" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{task.title}</h2>
                <p className="text-gray-600">{task.content}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TaskCards;
