import TaskList from "./TaskList";
import SearchBar from "./SearchBar";
import AddNewTaskButton from "./AddNewTaskButton";
import { NavLink } from "react-router-dom";

import StatusSelect from "./StatusSelect";
function TaskListPage() {
  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="max-w-[35rem] mx-auto p-4 "
      >
        <SearchBar />
        <StatusSelect />

        <TaskList />
      </div>
      <NavLink to="/">
        <AddNewTaskButton />
      </NavLink>
    </div>
  );
}

export default TaskListPage;
