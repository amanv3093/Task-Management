import { useContext } from "react";
import TaskCard from "./TaskCard";
import TaskContext from "../context/TaskContext";

const TaskList = () => {
  const { filteredTasks } = useContext(TaskContext);
  console.log(filteredTasks);

  if (filteredTasks.length === 0) {
    return (
      <p
        className="text-center md:text-4xl text-2xl flex items-center justify-center md:pb-20 pb:0"
        style={{ height: "calc(100vh - 78px - 68px)" }}
      >
        No tasks found :)
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4 mb-20">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
