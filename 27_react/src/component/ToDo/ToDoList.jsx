import ToDoItem from './ToDoItem';
import styles from './ToDo.module.sass';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const { toDos } = useSelector(({ toDosList }) => toDosList);

  return (
    <ul className={styles.ToDoList}>
      {toDos.map(toDo => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
