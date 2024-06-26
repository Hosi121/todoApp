import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import EditPage from '../pages/EditPage';
import { Task } from '../../types/Task';

type TaskCardProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskCard = (props: TaskCardProps) => {
  const { taskList, setTaskList } = props;

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

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

  const handleEditClick = (task: Task) => {
    setCurrentTask(task);
    setEditModalIsOpen(true);
  };

  return (
    <div>
      {taskList.map((task: Task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>詳細: {task.taskDetail}</p>
          <p>日時: {dateFormatter(task.timeLimit)}</p>
          <p>完了？: {task.isDone ? 'Done' : 'Not Done'}</p>

          <Button variant="contained" color="primary" onClick={() => handleEditClick(task)}>
            編集
          </Button>
        </div>
      ))}

      <Modal isOpen={editModalIsOpen}>
        {currentTask && (
          <EditPage
            setTaskList={setTaskList}
            setEditModalIsOpen={setEditModalIsOpen}
            currentTask={currentTask}
          />
        )}
      </Modal>
    </div>
  );
};

export default TaskCard;
