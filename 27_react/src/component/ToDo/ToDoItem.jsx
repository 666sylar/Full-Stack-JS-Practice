import styles from './ToDo.module.sass';
import classNames from 'classnames';
import { deleteToDo, toggleComplete } from '../../store/slice/toDosSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ToDoItem = ({ toDo }) => {
  const dispatch = useDispatch();

  const isOverdue = toDo.deadline && new Date(toDo.deadline) < new Date();
  const taskClassName = classNames({
    [styles.completed]: toDo.completed,
    [styles.overdue]: isOverdue && !toDo.completed,
  });

  return (
    <li className={styles.ToDoItem}>
      <span className={taskClassName}>{toDo.task}</span>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => dispatch(toggleComplete(toDo.id))}
          className={classNames({
            [styles.completeButton]: !toDo.completed,
            [styles.undoButton]: toDo.completed,
          })}
        >
          {toDo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => dispatch(deleteToDo(toDo.id))}
          className={styles.deleteButton}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ToDoItem.propTypes = {
  toDo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    deadline: PropTypes.string,
  }).isRequired,
};

export default ToDoItem;
