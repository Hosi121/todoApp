import React, { useState, ChangeEvent } from 'react';
import TaskForm from '../molecules/TaskForm';

type Task = {
  id: number;
  title: string;
  isDone: boolean;
  timeLimit: Date;
  taskDetail: string;
};

type EditPageProps = {
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
  setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentTask: Task;
};

const EditPage = ({ setTaskList, setEditModalIsOpen, currentTask }: EditPageProps) => {
  const [editedTask, setEditedTask] = useState<Task>(currentTask);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: type === 'checkbox' ? checked : name === 'timeLimit' ? new Date(value) : value,
    });
  };

  const handleSave = () => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task)),
    );
    setEditModalIsOpen(false);
  };

  const handleCancel = () => {
    setEditModalIsOpen(false);
  };

  return (
    <TaskForm
      task={editedTask}
      onChange={handleChange}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};

export default EditPage;
