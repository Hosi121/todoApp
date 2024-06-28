import { Task } from "./Task";

export type EditPageProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask: Task;
};
