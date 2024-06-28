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
  const newTask = {
    id: 0,
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
