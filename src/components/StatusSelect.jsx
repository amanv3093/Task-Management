import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function StatusSelect() {
  const { setFilter } = useContext(TaskContext);
  return (
    <div className="flex justify-end items-center mt-4">
      <select
        className="btn"
        onChange={(e) => setFilter(e.target.value)}
        defaultValue="all"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default StatusSelect;
