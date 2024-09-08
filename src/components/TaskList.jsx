import { useContext } from "react";
import TaskCard from "./TaskCard";
import TaskContext from "../context/TaskContext";

const TaskList = () => {
  const { filteredTasks } = useContext(TaskContext);

  if (filteredTasks.length === 0) {
    return <p className="text-center mt-4">No tasks found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
