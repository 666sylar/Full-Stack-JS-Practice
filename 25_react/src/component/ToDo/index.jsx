import { ToDoProvider } from "../../context/ToDoContext";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import styles from "./ToDo.module.sass";
import src from "../../static/image/notebook.jpg";

const ToDo = () => {
  return (
    <>
      <div className={styles.imageWrapper}>
        <img src={src} alt="notebook"></img>
      </div>
      <div className={styles.ToDo}>
        <ToDoProvider>
          <ToDoForm />
          <ToDoList />
        </ToDoProvider>
      </div>
    </>
  );
};

export default ToDo;
