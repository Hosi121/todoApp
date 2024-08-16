import TaskCard from '../templates/TaskCard';
import { useEffect, useState } from 'react';
import { Task } from '../../types/Task';
import MakeTaskButton from '../templates/MakeTaskButton';
import { initializeTasks } from '../../services/ApiService';
const Home = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [isTaskListUpdated, setIsTaskListUpdated] = useState<boolean>(false);

  useEffect(() => {
    initializeTasks().then((tasks) => {
      setTaskList(tasks);
      setIsTaskListUpdated(false);
    });
  }, [isTaskListUpdated]);

  useEffect(() => {
    localStorage.setItem('localTaskList', JSON.stringify(taskList));
  }, [taskList]);

  const sortedTasks = [...taskList].sort((taskA, taskB) => {
    return taskA.isDone === taskB.isDone ? 0 : taskA.isDone ? 1 : -1;
  });

  useEffect(() => {
    setTaskList(sortedTasks);
  }, []);

  return (
    <>
      <h1>home</h1>
      <TaskCard
        taskList={taskList}
        setTaskList={setTaskList}
        setIsTaskListUpdated={setIsTaskListUpdated}
      />
      <MakeTaskButton
        taskList={taskList}
        setTaskList={setTaskList}
        setIsTaskListUpdated={setIsTaskListUpdated}
      />
    </>
  );
};

export default Home;
