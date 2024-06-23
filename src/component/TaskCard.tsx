import React, { useState, useEffect } from 'react';

const TaskCard = () => {
  type Task = {
    id: number;
    title: string;
    isDone: boolean;
    timeLimit: Date;
    taskDetail: string;
  };

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

  useEffect(() => {
    localStorage.setItem('localTaskList', JSON.stringify(taskList));
  }, [taskList]);

  const dateFormatter = (timeLimit: Date) => {
    const year = timeLimit.getFullYear();
    const month = timeLimit.getMonth() + 1;
    const date = timeLimit.getDate();
    const hour = timeLimit.getHours();
    const minute = timeLimit.getMinutes();
    return `${year}/${month}/${date} ${hour}:${minute}`;
  };

  return (
    <div>
      {taskList.map((task: Task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>詳細: {task.taskDetail}</p>
          <p>日時: {dateFormatter(task.timeLimit)}</p>
          <p>完了？: {task.isDone ? 'Done' : 'Not Done'}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
