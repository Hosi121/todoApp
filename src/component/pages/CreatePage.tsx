import { useState, ChangeEvent } from 'react';
import TaskForm from '../molecules/TaskForm';
import { Task } from '../../types/Task';
import { CreatePageProps } from '../../types/CreatePageProps';

const CreatePage = (props: CreatePageProps) => {
  const { taskList, setTaskList, setCreateModalIsOpen } = props;
  const [newTask, setNewTask] = useState<Task>({
    id: taskList.length + 1,
    title: '',
    isDone: false,
    timeLimit: new Date(),
    taskDetail: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewTask({
      ...newTask,
      [name]: type === 'checkbox' ? checked : name === 'timeLimit' ? new Date(value) : value,
    });
  };

  const handleSave = () => {
    setTaskList([...taskList, newTask]);
    setCreateModalIsOpen(false);
  };

  const handleCancel = () => {
    setCreateModalIsOpen(false);
  };

   const handleDelete = () => {
    setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== newTask.id));
    setCreateModalIsOpen(false);
    }

  return (
    <TaskForm
      task={newTask}
      onChange={handleChange}
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
      isCreateMode={true}  // isCreateMode を追加
    />
  );
};

export default CreatePage;