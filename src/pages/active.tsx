import { Header } from '../components/Header';
import { InputTask } from '../components/InputTask';
import { UseTasks } from '../hooks/useTasks';
import { Footer } from '../components/Footer';
import styles from '../styles/home.module.scss';

export default function Active() {
  const {
    tasks,
    handleCreateNewTask,
    newTaskTitle,
    setTasks,
    setNewTaskTitle,
  } = UseTasks();

  const filteredData = tasks.filter((task) => task.isComplete === false);
  return (
    <>
      <Header />
      <InputTask
        titleValue={newTaskTitle}
        createTaskTitle={handleCreateNewTask}
        newTaskTitle={setNewTaskTitle}
      />

      <div className={styles.todoItems}>
        <ul>
          {filteredData.map((task) => (
            <li key={task.id}>
              <label>
                <input type="checkbox" disabled />
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
