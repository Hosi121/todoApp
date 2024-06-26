import React from 'react';
import { Button } from '@mui/material';
import TextInput from '../atoms/TextInput';
import CheckboxInput from '../atoms/CheckboxInput';

type Task = {
  id: number;
  title: string;
  isDone: boolean;
  timeLimit: Date;
  taskDetail: string;
};

type TaskFormProps = {
  task: Task;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
};

const TaskForm = ({ task, onChange, onSave, onCancel }: TaskFormProps) => {
  return (
    <div>
      <h2>タスクを編集</h2>
      <TextInput label="タイトル" name="title" value={task.title} onChange={onChange} />
      <TextInput label="詳細" name="taskDetail" value={task.taskDetail} onChange={onChange} />
      <TextInput
        label="期限"
        name="timeLimit"
        type="datetime-local"
        value={task.timeLimit.toISOString().slice(0, 16)}
        onChange={onChange}
      />
      <CheckboxInput label="完了" name="isDone" checked={task.isDone} onChange={onChange} />
      <Button variant="contained" color="primary" onClick={onSave}>
        保存
      </Button>
      <Button variant="outlined" onClick={onCancel}>
        キャンセル
      </Button>
    </div>
  );
};

export default TaskForm;
