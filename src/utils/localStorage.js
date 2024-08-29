const getEntries = () => {
  return JSON.parse(localStorage.getItem("dairy")) || [];
};

const getEntriesByDate = (date) => {
  const entries = getEntries();
  const entriesByDate = entries.filter((entry) => entry.date === date);
  return entriesByDate;
};

export { getEntriesByDate };
