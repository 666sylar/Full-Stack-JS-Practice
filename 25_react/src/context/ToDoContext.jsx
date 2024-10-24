import { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

export const useToDo = () => useContext(ToDoContext);

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (task) => {
    const newToDo = { id: Date.now(), task, completed: false };
    setToDos((prevToDos) => [...prevToDos, newToDo]);
  };

  const deleteToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  const toggleComplete = (id) => {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo,
      ),
    );
  };

  return (
    <ToDoContext.Provider
      value={{ toDos, addToDo, deleteToDo, toggleComplete }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
