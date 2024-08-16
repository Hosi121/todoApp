import { Task } from '../types/Task';

const baseUrl = 'http://localhost:8000/tasks';

// APIリクエスト
const apiRequest = async (
  method: string,
  endpoint: string = '',
  body?: object,
): Promise<Response> => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Failed to ${method} request`);
    }

    return response;
  } catch (error) {
    console.error(`Error in ${method} request:`, error);
    throw error;
  }
};

// 初期化
export const initializeTasks = async (): Promise<Task[]> => {
  try {
    const response = await apiRequest('GET');
    const tasks: Task[] = await response.json();
    return tasks.map((task: Task) => ({
      ...task,
      timeLimit: new Date(task.timeLimit),
    }));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [
      {
        id: 1,
        title: 'どんまい',
        isDone: false,
        timeLimit: new Date('2024-06-23T23:59'),
        taskDetail: 'Detail of Task 1',
      },
      {
        id: 2,
        title: 'もう一回頑張ろう',
        isDone: true,
        timeLimit: new Date('2024-07-01T23:59'),
        taskDetail: 'Detail of Task 2',
      },
      {
        id: 3,
        title: 'ファイト',
        isDone: false,
        timeLimit: new Date('2024-07-15T23:59'),
        taskDetail: 'Detail of Task 3',
      },
    ];
  }
};

// チェックボックスの変更
export const handleCheckboxChange = async (
  task: Task,
  isChecked: boolean,
  setIsTaskListUpdated: (value: boolean) => void,
) => {
  try {
    await apiRequest('PUT', `/${task.id}`, { ...task, isDone: isChecked });
    setIsTaskListUpdated(true);
  } catch (error) {
    console.error('Error:', error);
  }
};

// タスクの追加
export const postTask = async (task: Task) => {
  try {
    const response = await apiRequest('POST', '', task);
    const result = await response.json();
    console.log('Task created:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

// タスクの消去
export const deleteTask = async (id: number) => {
  try {
    await apiRequest('DELETE', `/${id}`);
    console.log('Task deleted:', id);
  } catch (error) {
    console.error('Error:', error);
  }
};

// タスクの編集
export const putTask = async (editedTask: Task) => {
  try {
    await apiRequest('PUT', `/${editedTask.id}`, editedTask);
  } catch (error) {
    console.error('Error:', error);
  }
};
