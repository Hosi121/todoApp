import { Task } from "./Task";

export type TaskFormProps = {
  task: Task;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
};
