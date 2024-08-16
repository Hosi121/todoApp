import { Button } from '@mui/material';
import { useState } from 'react';
import Modal from 'react-modal';
import CreatePage from '../pages/CreatePage';
import { MakeTaskButtonProps } from '../../types/MakeTaskButtonProps';

const MakeTaskButton = (props: MakeTaskButtonProps) => {
  const { taskList, setTaskList, setIsTaskListUpdated } = props;
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const onClick = () => {
    setCreateModalIsOpen(true);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={onClick}>
        作成
      </Button>

      <Modal isOpen={createModalIsOpen}>
        <CreatePage
          taskList={taskList}
          setTaskList={setTaskList}
          setCreateModalIsOpen={setCreateModalIsOpen}
          setIsTaskListUpdated={setIsTaskListUpdated}
        />
      </Modal>
    </>
  );
};

export default MakeTaskButton;