import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(TaskContext);

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="input w-full mb-4"
    />
  );
};

export default SearchBar;
