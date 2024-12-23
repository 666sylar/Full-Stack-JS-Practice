import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const PHONES_SLICE_NAME = 'phones';

const initialState = {
  phones: [],
  isFetching: false,
  error: null,
};

export const createPhoneThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/create`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.createPhone(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const getPhonesThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getPhones();
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const deletePhoneThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/delete`,
  async (payload, { rejectWithValue }) => {
    try {
      await API.deletePhone(payload);
      return payload;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const usersSlice = createSlice({
  name: PHONES_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    builder.addCase(createPhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createPhoneThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.phones.push(payload);
    });
    builder.addCase(createPhoneThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });

    builder.addCase(getPhonesThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getPhonesThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.phones = payload;
    });
    builder.addCase(getPhonesThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });

    builder.addCase(deletePhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(deletePhoneThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.phones = state.phones.filter(p => p.id !== payload);
    });
    builder.addCase(deletePhoneThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

export default usersSlice.reducer;
