import { useState, ChangeEvent } from 'react';
import TaskForm from '../molecules/TaskForm';
import { Task } from '../../types/Task';
import { EditPageProps } from '../../types/EditPageProps';

const EditPage = (props: EditPageProps) =>
{
  const { taskList, setTaskList, setEditModalIsOpen, currentTask } = props;
  const [editedTask, setEditedTask] = useState<Task>(currentTask);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setEditedTask(prevTask => ({
      ...prevTask,
      [name]: type === 'checkbox' ? checked : name === 'timeLimit' ? new Date(value) : value,
    }));
  };

  const handleSave = () => {
    setTaskList(prevTaskList =>
      prevTaskList.map(task => (task.id === editedTask.id ? editedTask : task))
    );
    setEditModalIsOpen(false);
  };

  const handleCancel = () => {
    setEditModalIsOpen(false);
  };

  const handleDelete = () => {
    setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== editedTask.id));
    setEditModalIsOpen(false);
  };

  return (
    <TaskForm
      task={editedTask}
      onChange={handleChange}
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
    />
  );
};

export default EditPage;