import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from 'react';
import { useEffect, useState } from 'react';
interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  handleCreateNewTask: () => void;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  newTaskTitle: string;
  setNewTaskTitle: Dispatch<SetStateAction<string>>;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storagedTasks =
      typeof window !== 'undefined'
        ? localStorage.getItem('@todoDevChallenge:tasks')
        : null;
    if (storagedTasks) {
      return JSON.parse(storagedTasks);
    } else {
      return [];
    }
  });
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('@todoDevChallenge:tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    console.log(newTask);

    setTasks((oldState) => [...oldState, newTask]);
    setNewTaskTitle('');
  }
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        handleCreateNewTask,
        newTaskTitle,
        setNewTaskTitle,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function UseTasks() {
  const context = useContext(TasksContext);

  return context;
}
