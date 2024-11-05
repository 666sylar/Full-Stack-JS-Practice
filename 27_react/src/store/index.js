import { configureStore } from '@reduxjs/toolkit';
import toDosReducer from './slice/toDosSlice';
import usersReducer from './slice/usersSlice';

const store = configureStore({
  reducer: {
    toDosList: toDosReducer,
    usersList: usersReducer,
  },
});

export default store;
