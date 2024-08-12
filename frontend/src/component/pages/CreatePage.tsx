import { useState, ChangeEvent } from 'react';
import TaskForm from '../molecules/TaskForm';
import { Task } from '../../types/Task';
import { CreatePageProps } from '../../types/CreatePageProps';

const CreatePage = (props: CreatePageProps) => {
  const { taskList, setTaskList, setCreateModalIsOpen, setIsTaskListUpdated} = props;
  const [newTask, setNewTask] = useState<Task>({
    id: taskList.length + 1,
    title: '',
    isDone: false,
    timeLimit: new Date(),
    taskDetail: '',
  });

  

  const postTask = async (task:Task) => {
    try {
      const response = await fetch('http://localhost:8000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      const result = await response.json();
      
      setIsTaskListUpdated(true);
      console.log('Task created:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    //タスクを編集
    setNewTask({
      ...newTask,
      [name]: type === 'checkbox' ? checked : name === 'timeLimit' ? new Date(value) : value,
    });
  };

  const handleSave = () => {
    if (newTask.title.trim() === '') {
      alert('タイトルを入力してください');
      return;
    }
    postTask(newTask);
    //タスクを追加
    // setTaskList([...taskList, newTask]);
    setCreateModalIsOpen(false);
  };

  const handleCancel = () => {
    setCreateModalIsOpen(false);
  };

  const handleDelete = () =>
  {
    //タスクを消去
    setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== newTask.id));
    setCreateModalIsOpen(false);
  };

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