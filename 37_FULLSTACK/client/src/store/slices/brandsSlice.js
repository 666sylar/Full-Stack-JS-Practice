import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const BRANDS_SLICE_NAME = 'brands';

const initialState = {
  brands: [],
  isFetching: false,
  error: null,
};

export const getBrandsThunk = createAsyncThunk(
  `${BRANDS_SLICE_NAME}/get`,
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

const brandsSlice = createSlice({
  name: BRANDS_SLICE_NAME,
  initialState,
  extraReducers: builder => {
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

export default brandsSlice.reducer;
