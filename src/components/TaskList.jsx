import { useContext } from "react";
import TaskCard from "./TaskCard";
import TaskContext from "../context/TaskContext";

const TaskList = () => {
  const { filteredTasks, theme } = useContext(TaskContext);
  console.log(filteredTasks);

  if (filteredTasks.length === 0) {
    return (
      <p
        className="text-center md:text-4xl text-2xl md:pt-[8rem] pt-24"
        style={{ color: theme === "dark" ? "white" : "black" }}
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
