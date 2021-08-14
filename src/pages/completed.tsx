import { Header } from '../components/Header';
import { UseTasks } from '../hooks/useTasks';
import styles from '../styles/home.module.scss';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { Footer } from '../components/Footer';

export default function Completed() {
  const { tasks, setTasks } = UseTasks();

  const filteredTaskCompleted = tasks.filter(
    (task) => task.isComplete === true
  );

  function handleDeleteOneTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function handleDeleteAllTasks() {
    setTasks(tasks.filter((task) => task.isComplete !== true));
  }
  return (
    <>
      <Header />
      <div className={styles.todoItems}>
        <ul>
          {filteredTaskCompleted.map((task) => (
            <li key={task.id}>
              <label>
                <input type="checkbox" defaultChecked={task.isComplete} />
              </label>
              <p className={task.isComplete ? styles.checked : ''}>
                {task.title}
              </p>
              <RiDeleteBin7Line onClick={() => handleDeleteOneTask(task.id)} />
            </li>
          ))}
        </ul>
        <button
          className={styles.deleteButton}
          onClick={() => handleDeleteAllTasks()}
        >
          <RiDeleteBin7Line />
          delete all
        </button>
      </div>
      <Footer />
    </>
  );
}
