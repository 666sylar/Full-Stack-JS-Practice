import { useState } from "react";
import { useToDo } from "../../context/ToDoContext";
import styles from "./ToDo.module.sass";
import classNames from "classnames";
import * as yup from "yup";

const ToDoForm = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const { addToDo } = useToDo();

  const TODO_SCHEMA = yup.object().shape({
    task: yup.string().required("Task is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await TODO_SCHEMA.validate({ task });
      setError("");
      addToDo(task);
      setTask("");
    } catch (err) {
      setError(err.message);
    }
  };

  const taskInputClassName = classNames(styles.input, {
    [styles.invalid]: error,
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="taskInput">To Do:</label>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          id="taskInput"
          className={taskInputClassName}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
      <button type="submit" className={styles.submitButton}>
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
