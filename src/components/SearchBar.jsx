import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const SearchBar = () => {
  const { searchQuery, setSearchQuery, theme } = useContext(TaskContext);

  return (
    <div>
      <h1
        className="text-3xl font-bold text-center md:my-6 my-3"
        style={{
          color: theme === "dark" ? "white" : "black",
        }}
      >
        Task List
      </h1>
      <div className="w-full flex justify-start items-center gap-1.5 bg-transparent border-2 border-gray-300 rounded p-2.5  focus-within:bg-white focus-within:border-purple-500">
        <i className="fas fa-search text-[#9d62f3] text-xl"></i>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
          className="bg-transparent outline-none w-full placeholder-gray-400 dark:placeholder-gray-400 text-purple-500 pl-3"
        />
      </div>
    </div>
  );
};

export default SearchBar;
