import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import { getTasks } from "../../services/dataService";

const TaskPage = () => {
  const [taskState, setTaskState] = useState([]);

  const addTask = (task: any) => {
    setTaskState([...taskState, task]);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTaskState(data.getTasks);
    };
    fetchTasks();
  }, []);

  return (
    <div className="px-4 py-8 mx-auto max-w-4xl">
      <div>
        <TaskForm addTask={(task) => addTask(task)} />
      </div>
      <div>
        <TaskTable tasks={taskState} />
      </div>
    </div>
  );
};

export default TaskPage;
