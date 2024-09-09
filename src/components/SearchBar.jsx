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
        {/* <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-[#9d62f3] text-xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.226 7.25c-2.623-4.542-8.432-6.098-12.974-3.475-4.543 2.622-6.099 8.431-3.477 12.974 2.623 4.542 8.431 6.099 12.974 3.477a.75.75 0 0 1 .75 1.299c-5.26 3.037-11.987 1.235-15.024-4.026C-.562 12.24 1.24 5.512 6.501 2.475 11.76-.562 18.488 1.24 21.525 6.501a10.959 10.959 0 0 1 1.455 4.826c.013.056.02.113.02.173v2.25a3.5 3.5 0 0 1-6.623 1.581 5.5 5.5 0 1 1 1.112-3.682.802.802 0 0 1 .011.129v1.972a2 2 0 1 0 4 0v-1.766a9.456 9.456 0 0 0-1.274-4.733ZM16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"></path>
        </svg> */}
        <i className="fas fa-search text-[#9d62f3] text-xl"></i>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
          className="w-full bg-transparent outline-none w-full placeholder-gray-400 dark:placeholder-gray-400 text-purple-500 pl-3"
        />
      </div>
    </div>
  );
};

export default SearchBar;
