import TaskList from "./TaskList";
import SearchBar from "./SearchBar";
import AddNewTaskButton from "./AddNewTaskButton";
import { NavLink } from "react-router-dom";

import StatusSelect from "./StatusSelect";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskListPage() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-[35rem] mx-auto p-4 ">
        {tasks.length === 0 ? (
          <TaskList />
        ) : (
          <>
            <SearchBar />
            <StatusSelect />

            <TaskList />
          </>
        )}
      </div>
      <NavLink to="/">
        <AddNewTaskButton />
      </NavLink>
    </div>
  );
}

export default TaskListPage;
