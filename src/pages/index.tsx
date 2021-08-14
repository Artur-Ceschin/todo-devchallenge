import Head from 'next/head';

import { Header } from '../components/Header';
import { InputTask } from '../components/InputTask';
import { UseTasks } from '../hooks/useTasks';
import { Footer } from '../components/Footer';

import styles from '../styles/home.module.scss';
export default function Home() {
  const {
    tasks,
    handleCreateNewTask,
    newTaskTitle,
    setTasks,
    setNewTaskTitle,
  } = UseTasks();
  function handleToggleTaskCompletion(id: number) {
    const newTasksMapping = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );

    setTasks(newTasksMapping);
  }
  return (
    <>
      <Head>
        <title>#TODO ALL</title>
      </Head>
      <Header />
      <InputTask
        titleValue={newTaskTitle}
        createTaskTitle={handleCreateNewTask}
        newTaskTitle={setNewTaskTitle}
      />

      <div className={styles.todoItems}>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  onClick={() => handleToggleTaskCompletion(task.id)}
                  defaultChecked={task.isComplete}
                />
              </label>
              <p className={task.isComplete ? styles.checked : ''}>
                {task.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
