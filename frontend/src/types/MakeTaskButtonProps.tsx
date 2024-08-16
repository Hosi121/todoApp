import { Task } from './Task';
export type MakeTaskButtonProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsTaskListUpdated: React.Dispatch<React.SetStateAction<boolean>>;
};
