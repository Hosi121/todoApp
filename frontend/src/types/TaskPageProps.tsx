import { Task } from './Task';

export interface TaskPageProps {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask?: Task;
  isCreateMode: boolean;
}