import { Button } from '@mui/material';
import TextInput from '../atoms/TextInput';
import CheckboxInput from '../atoms/CheckboxInput';
import { TaskFormProps } from '../../types/TaskFormProps';

const TaskForm = (props: TaskFormProps) => {
  const { task, onChange, onSave, onCancel, onDelete, isCreateMode } = props;

  return (
    <div>
      <h2>{isCreateMode ? 'タスクを作成' : 'タスクを編集'}</h2>
      <TextInput label="タイトル" name="title" value={task.title} onChange={onChange} />
      <TextInput label="詳細" name="taskDetail" value={task.taskDetail} onChange={onChange} />
      <TextInput
        label="期限"
        name="timeLimit"
        type="datetime-local"
        value={task.timeLimit.toISOString().slice(0, 16)}
        onChange={onChange}
      />
      {!isCreateMode && (
        <CheckboxInput label="完了" name="isDone" checked={task.isDone} onChange={onChange} />
      )}
      <Button variant="contained" color="primary" onClick={onSave}>
        保存
      </Button>
      <Button variant="outlined" onClick={onCancel}>
        キャンセル
      </Button>
      {!isCreateMode && (
        <Button variant="outlined" onClick={onDelete}>
          消去
        </Button>
      )}
    </div>
  );
};

export default TaskForm;