import EntryCards from "./EntryCards";
import TodayDate from "./TodayDate";
import Dates from "./Dates";
import Entry from "./Entry";

const Home = () => {
  return (
    <div className="w-96 m-auto">
      <div className="flex justify-between py-10">
        <TodayDate />
        <Entry />
      </div>
      <Dates />
      <EntryCards />
    </div>
  );
};

export default Home;
