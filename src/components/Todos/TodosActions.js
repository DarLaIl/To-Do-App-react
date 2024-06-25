import { CiRedo, CiTrash } from 'react-icons/ci';
import Button from '../UI/Button';
import style from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={style.todosActionsContainer}>
      <Button title='Reset Todos' onClick={resetTodos}>
        <CiRedo />
      </Button>
      <Button
        title='Clear Completed Todos'
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <CiTrash />
      </Button>
    </div>
  );
}

export default TodosActions;
