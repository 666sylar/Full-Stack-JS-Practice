import { useToDo } from "../../context/ToDoContext";
import ToDoItem from "./ToDoItem";
import styles from "./ToDo.module.sass";

const ToDoList = () => {
  const { toDos } = useToDo();

  return (
    <ul className={styles.ToDoList}>
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
