import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nDb } from "../../db";

export const fetchServiceById = createAsyncThunk(
  'serviceDetail/fetchServiceById',
  async (serviceId) => {
    try {
      const snapshot = await nDb.collection('services').doc(serviceId).get();
      if (snapshot.exists) {
        const serviceData = snapshot.data(); // Access data directly
        console.log('detail', serviceData);
        return serviceData;
      } else {
        throw new Error('Service not found');
      }
    } catch (error) {
      throw error; // Re-throw error to be caught in the rejected case
    }
  }
);

const serviceDetailSlice = createSlice({
  name: 'serviceDetail',
  initialState: {
    data: {},
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceById.pending, (state) => {
        console.log('loading detail')
        state.loading = true;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        console.log('fetch detail success')
        state.data = action.payload;
        state.loading = false;
        state.error = null; // Clear error on success
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
          state.error = action.error.message;
          console.log(state.error)
        state.loading = false;
      });
  }
});

export default serviceDetailSlice.reducer;
