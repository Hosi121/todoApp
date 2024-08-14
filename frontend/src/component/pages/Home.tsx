import TaskCard from '../templates/TaskCard';
import { useEffect, useState } from 'react';
import { Task } from '../../types/Task';
import MakeTaskButton from '../templates/MakeTaskButton';

const initializeTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch('http://localhost:8000/tasks', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }

    const tasks: Task[] = await response.json();

    return tasks.map((task: Task) => ({
      ...task,
      timeLimit: new Date(task.timeLimit),
    }));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [
      {
        //task1
        id: 1,
        title: 'どんまい',
        isDone: false,
        timeLimit: new Date('2024-06-23T23:59'),
        taskDetail: 'Detail of Task 1',
      },
      {
        //task2
        id: 2,
        title: 'もう一回頑張ろう',
        isDone: true,
        timeLimit: new Date('2024-07-01T23:59'),
        taskDetail: 'Detail of Task 2',
      },
      {
        //task3
        id: 3,
        title: 'ファイト',
        isDone: false,
        timeLimit: new Date('2024-07-15T23:59'),
        taskDetail: 'Detail of Task 3',
      },
    ];
  }
};

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
