import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk(
  'users/getUser',
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getUser();
      return data.results;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(getUsersThunk.pending, state => {
      state.error = null;
      state.isFetching = true;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.isFetching = false;
    });
    builder.addCase(getUsersThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

export default usersSlice.reducer;
