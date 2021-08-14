import styles from './input.module.scss';

interface InputTaskProps {
  titleValue: string;
  createTaskTitle: () => void;
  newTaskTitle: (e: string) => void;
}

export function InputTask({
  titleValue,
  createTaskTitle,
  newTaskTitle,
}: InputTaskProps) {
  return (
    <div className={styles.todoForm}>
      <input
        type="text"
        placeholder="adicionar tarefa"
        value={titleValue}
        onChange={(e) => newTaskTitle(e.target.value)}
      />
      <button type="submit" onClick={createTaskTitle}>
        Adicionar
      </button>
    </div>
  );
}
