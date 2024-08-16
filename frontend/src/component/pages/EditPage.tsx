import { useState, ChangeEvent } from 'react';
import TaskForm from '../molecules/TaskForm';
import { Task } from '../../types/Task';
import { EditPageProps } from '../../types/EditPageProps';
import { deleteTask,putTask} from '../../services/ApiService';

const EditPage = (props: EditPageProps) =>
{
  const { taskList, setTaskList, setEditModalIsOpen, currentTask ,setIsTaskListUpdated} = props;
  const [editedTask, setEditedTask] = useState<Task>(currentTask);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setEditedTask((prevTask) => {
      let newValue;

      if (type === 'checkbox') {
        newValue = checked;
      } else if (name === 'timeLimit') {
        newValue = new Date(value);
      } else {
        newValue = value;
      }

      return {
        ...prevTask,
        [name]: newValue,
      };
    });
  };


  const handleSave = () => {
    putTask(editedTask);
    setIsTaskListUpdated(true);
    setEditModalIsOpen(false);
  };

  const handleCancel = () => {
    setEditModalIsOpen(false);
  };

  const handleDelete = () =>
  {
    deleteTask(editedTask.id);
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