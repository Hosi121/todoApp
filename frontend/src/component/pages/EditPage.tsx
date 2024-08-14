import { useState, ChangeEvent } from 'react';
import TaskForm from '../molecules/TaskForm';
import { Task } from '../../types/Task';
import { EditPageProps } from '../../types/EditPageProps';

const EditPage = (props: EditPageProps) =>
{
  const { taskList, setTaskList, setEditModalIsOpen, currentTask ,setIsTaskListUpdated} = props;
  const [editedTask, setEditedTask] = useState<Task>(currentTask);

    const deleteTask = async (id: number) => {
      try {
        console.log('deleteTask');
        const response = await fetch(`http://localhost:8000/tasks/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete task');
        }

        
        console.log('Task deleted:', id);
      } catch (error) {
        console.error('Error:', error);
      }
    };


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

  const handleDelete = () =>
  {
    deleteTask(editedTask.id);
    // setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== editedTask.id));
    // console.log('deleteTask');
    setIsTaskListUpdated(true);
    setEditModalIsOpen(false);
  };

  return (
    <TaskForm
      task={editedTask}
      onChange={handleChange}
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
      isCreateMode={false}
    />
  );
};

export default EditPage;