import { Task } from '../types/Task';
const tasksApiUrl = 'http://localhost:8000/tasks';

export const initializeTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(tasksApiUrl, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }

    const tasks: Task[] = await response.json();

    return tasks.map((task: Task) => ({
      ...task,
      timeLimit: new Date(task.timeLimit),
    }));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [
      {
        // task1
        id: 1,
        title: 'どんまい',
        isDone: false,
        timeLimit: new Date('2024-06-23T23:59'),
        taskDetail: 'Detail of Task 1',
      },
      {
        // task2
        id: 2,
        title: 'もう一回頑張ろう',
        isDone: true,
        timeLimit: new Date('2024-07-01T23:59'),
        taskDetail: 'Detail of Task 2',
      },
      {
        // task3
        id: 3,
        title: 'ファイト',
        isDone: false,
        timeLimit: new Date('2024-07-15T23:59'),
        taskDetail: 'Detail of Task 3',
      },
    ];
  }
};
export const handleCheckboxChange = async (
  task: Task,
  isChecked: boolean,
  setIsTaskListUpdated: (value: boolean) => void,
) => {
  try {
    const response = await fetch(`${tasksApiUrl}/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...task, isDone: isChecked }),
    });

    if (!response.ok) {
      throw new Error('Failed to save task');
    }

    setIsTaskListUpdated(true);
  } catch (error) {
    console.error('Error:', error);
  }
};

export const postTask = async (task: Task) => {
  try {
    const response = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error('Failed to create task');
    }

    const result = await response.json();
    console.log('Task created:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};
