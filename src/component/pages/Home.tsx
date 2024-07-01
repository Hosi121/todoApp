import TaskCard from '../templates/TaskCard';

import { useState } from 'react';
import { Task } from '../../types/Task';

const Home = () => {
  const initializeTasks = (): Task[] => {
    const storedOptions = localStorage.getItem('localTaskList');

    if (storedOptions) {
      const parsedOptions = JSON.parse(storedOptions);
      return parsedOptions.map((task: any) => ({
        ...task,
        timeLimit: new Date(task.timeLimit),
      }));
    } else {
      return [
        {
          id: 1,
          title: 'Task 1',
          isDone: false,
          timeLimit: new Date('2024-06-23T23:59'),
          taskDetail: 'Detail of Task 1',
        },
        {
          id: 2,
          title: 'Task 2',
          isDone: true,
          timeLimit: new Date('2024-07-01T23:59'),
          taskDetail: 'Detail of Task 2',
        },
        {
          id: 3,
          title: 'Task 3',
          isDone: false,
          timeLimit: new Date('2024-07-15T23:59'),
          taskDetail: 'Detail of Task 3',
        },
      ];
    }
  };

  const [taskList, setTaskList] = useState<Task[]>(initializeTasks);

  const sortByDone = taskList.sort((taskA, taskB) => (taskA.isDone === taskB.isDone ? 0 : taskA.isDone ? -1 : 1));

  return (
    <>
      <h1>home</h1>
      <TaskCard taskList={taskList} setTaskList={setTaskList} />
    </>
  );
};

export default Home;
