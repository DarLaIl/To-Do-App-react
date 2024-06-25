import { BsClipboard2Heart } from 'react-icons/bs';
import { CiCircleCheck, CiTrash } from 'react-icons/ci';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <BsClipboard2Heart className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <CiTrash
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <CiCircleCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
