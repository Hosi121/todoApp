import { Task } from './Task';

export interface CreatePageProps {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  setCreateModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateMode: boolean;
}

export interface EditPageProps {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask: Task;
  isCreateMode: boolean;
  setIsTaskListUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}