import TaskCards from "./TaskCards";
import Dates from "./Dates";

const Home = () => {
  return (
    <div className="w-96 m-auto">
      <div className="flex justify-between py-10">
        <div className="flex flex-col justify-between">
          <p className="text-gray-600">27 August</p>
          <h1 className="text-3xl font-bold">Heute</h1>
        </div>
        <button className="btn btn-success text-white">&#43; Add Task</button>
      </div>
      <Dates />
      <TaskCards />
    </div>
  );
};

export default Home;
