import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import EditPage from '../pages/EditPage';
import { Task } from '../../types/Task';
import { TaskCardProps } from '../../types/TaskCardProps';
import { Checkbox } from '@mui/material';
const TaskCard = (props: TaskCardProps) => {
  const { taskList, setTaskList } = props;
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const dateFormatter = (timeLimit: Date) => {
    const year = timeLimit.getFullYear();
    const month = timeLimit.getMonth() + 1; //月は0から始まるため +1
    const date = timeLimit.getDate();
    const hour = timeLimit.getHours();
    const minute = timeLimit.getMinutes();
    return `${year}/${month}/${date} ${hour}:${minute}`;
  };

  const handleEditClick = (task: Task) => {
    setCurrentTask(task);
    setEditModalIsOpen(true);
  };

  useEffect(() => {
    localStorage.setItem('localTaskList', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div>
      {taskList.map((task: Task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>詳細: {task.taskDetail}</p>
          <p>日時: {dateFormatter(task.timeLimit)}</p>
          <p>完了: {task.isDone ? 'Done' : 'Not Done'}</p>
          <Button variant="contained" color="primary" onClick={() => handleEditClick(task)}>
            編集
          </Button>
          <Checkbox
          name="isDone"
            checked={task.isDone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  const isChecked = e.target.checked;
  setTaskList((prevTaskList) =>
    prevTaskList.map((t) =>
      t.id === task.id ? { ...t, isDone: isChecked } : t
    )
  );
}}
            
          />
        </div>

      ))}

      <Modal isOpen={editModalIsOpen}>
        {currentTask && (
          <EditPage
            taskList={taskList}
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
