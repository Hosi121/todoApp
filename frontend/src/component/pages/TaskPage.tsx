import TaskPage from '../pages/TaskPage';
import { CreatePageProps } from '../../types/CreatePageProps';

const CreatePage = (props: CreatePageProps) => {
  const { taskList, setTaskList, setCreateModalIsOpen } = props;

  return (
    <TaskPage
      taskList={taskList}
      setTaskList={setTaskList}
      setModalIsOpen={setCreateModalIsOpen}
      isCreateMode={true}
    />
  );
};

export default CreatePage;