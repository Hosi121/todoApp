import { useState, ChangeEvent } from 'react';
import TaskForm from '../molecules/TaskForm';
import { Task } from '../../types/Task';
import { CreatePageProps } from '../../types/CreatePageProps';
import { postTask } from '../../services/ApiService';

const CreatePage = (props: CreatePageProps) => {
  const { taskList, setTaskList, setCreateModalIsOpen, setIsTaskListUpdated } = props;
  
  const getNextId = () => {
    if (taskList.length === 0) return 1; // リストが空の場合は 1 を返す
    return Math.max(...taskList.map((task) => task.id)) + 1;
  };

  const [newTask, setNewTask] = useState<Task>({
    id: getNextId(),
    title: '',
    isDone: false,
    timeLimit: new Date(),
    taskDetail: '',
  });

  

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
    setIsTaskListUpdated(true);
    //タスクを追加
    // setTaskList([...taskList, newTask]);
    setCreateModalIsOpen(false);
  };

  const handleCancel = () =>
  {
    // console.log("handleCancel");
    setCreateModalIsOpen(false);
  };

  const handleDelete = () =>
  {
    //タスクを消去
    // setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== newTask.id));
    
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