import { Button } from '@mui/material';
import { useState } from 'react';
import Modal from 'react-modal';
import EditPage from '../pages/EditPage';
import { MakeTaskButtonProps } from '../../types/MakeTaskButtonProps';

const MakeTaskButton = (props: MakeTaskButtonProps) => {
  const { taskList, setTaskList } = props;
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const onClick = () => {
    setEditModalIsOpen(true);
  };

  const lastTask = taskList[taskList.length - 1];
  const newId = lastTask ? lastTask.id + 1 : 1;
  const newTask = {
    id: newId,
    title: '',
    isDone: false,
    timeLimit: new Date(),
    taskDetail: '',
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={onClick}>
        Make Task
      </Button>

      <Modal isOpen={editModalIsOpen}>
        {newTask && (
          <EditPage
            taskList={taskList}
            setTaskList={setTaskList}
            setEditModalIsOpen={setEditModalIsOpen}
            currentTask={newTask}
          />
        )}
      </Modal>
    </>
  );
};

export default MakeTaskButton;
