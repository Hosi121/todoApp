import { Task } from "./Task";
export type TaskCardProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsTaskListUpdated: React.Dispatch<React.SetStateAction<boolean>>;
};
