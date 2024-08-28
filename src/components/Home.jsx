import TaskCards from "./TaskCards";
import Entry from "./Entry";

const Home = () => {
  return (
    <div className="w-96 m-auto">
      <div className="flex justify-between py-10">
        <div className="flex flex-col justify-between">
          <p className="text-gray-600">27 August</p>
          <h1 className="text-3xl font-bold">Heute</h1>
        </div>
        <Entry />
      </div>
      <TaskCards />
    </div>
  );
};

export default Home;
