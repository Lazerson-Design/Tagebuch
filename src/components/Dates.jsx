const Dates = () => {
  const getCurrentWeek = () => {
    let curr = new Date();
    let week = [];

    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first));
      week.push({
        day: day.toLocaleDateString("en-US", { weekday: "short" }), // Mon, Tue, etc.
        date: day.toLocaleDateString("en-US", {
          //   month: "short",
          day: "numeric",
        }), // Aug 27, etc.
      });
    }

    console.log(week);

    return week;
  };

  return (
    <ul className="flex justify-between mb-8">
      {getCurrentWeek().map((week) => {
        return (
          <li>
            <a className="flex flex-col items-center gap-2 border-b-2 border-transparent hover:border-[#02a96d] hover:text-[#02a96d] hover:cursor-pointer no-underline">
              <span className="text-sm">{week.day}</span>
              <span className="font-bold">{week.date}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Dates;
