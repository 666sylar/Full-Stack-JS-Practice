import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const PHONES_SLICE_NAME = 'phones';

const initialState = {
  phones: [],
  brands: [],
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

export const updatePhoneThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/update`,
  async ({ id, ...data }, { rejectWithValue }) => {
    try {
      const {
        data: { data: updatedPhone },
      } = await API.updatePhone(id, data);
      return updatedPhone;
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

export const getBrandsThunk = createAsyncThunk(
  `${PHONES_SLICE_NAME}/get/brands`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getBrands();
      return data;
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
      state.phones = [...payload];
    });
    builder.addCase(getPhonesThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });

    builder.addCase(updatePhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(updatePhoneThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      const index = state.phones.findIndex(p => p.id === payload.id);
      if (index !== -1) {
        state.phones[index] = { ...state.phones[index], ...payload };
      }
    });
    builder.addCase(updatePhoneThunk.rejected, (state, { payload }) => {
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

    builder.addCase(getBrandsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getBrandsThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.brands = payload;
    });
    builder.addCase(getBrandsThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

export default usersSlice.reducer;
