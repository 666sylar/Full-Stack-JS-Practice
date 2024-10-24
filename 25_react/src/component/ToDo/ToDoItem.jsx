import { useToDo } from "../../context/ToDoContext";
import styles from "./ToDo.module.sass";
import classNames from "classnames";
import PropTypes from "prop-types";

const ToDoItem = ({ toDo }) => {
  const { deleteToDo, toggleComplete } = useToDo();

  const taskClassName = classNames({ [styles.completed]: toDo.completed });
  const completeBtnClassName = classNames({
    [styles.completeButton]: !toDo.completed,
    [styles.undoButton]: toDo.completed,
  });

  return (
    <li className={styles.ToDoItem}>
      <span className={taskClassName}>{toDo.task}</span>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => toggleComplete(toDo.id)}
          className={completeBtnClassName}
        >
          {toDo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteToDo(toDo.id)}
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
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ToDoItem;
