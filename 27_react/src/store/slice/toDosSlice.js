import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  toDos: [],
};

const toDosSlice = createSlice({
  name: 'toDos',
  initialState,
  reducers: {
    addToDo: (state, { payload }) => {
      const { task, deadline } = payload;
      const newToDo = {
        id: uuidv4(),
        task,
        completed: false,
        deadline,
      };
      state.toDos = [...state.toDos, newToDo];
    },
    deleteToDo: (state, { payload }) => {
      state.toDos = state.toDos.filter(toDo => toDo.id !== payload);
    },
    toggleComplete: (state, { payload }) => {
      state.toDos = state.toDos.map(toDo =>
        toDo.id === payload ? { ...toDo, completed: !toDo.completed } : toDo
      );
    },
  },
});

const { reducer, actions } = toDosSlice;

export const { addToDo, deleteToDo, toggleComplete } = actions;

export default reducer;
