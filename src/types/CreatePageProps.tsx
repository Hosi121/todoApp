import { Task } from './Task';

export interface CreatePageProps {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  setCreateModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}