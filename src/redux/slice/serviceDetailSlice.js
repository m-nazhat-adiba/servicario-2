import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

export const fetchServiceById = createAsyncThunk(
  "serviceDetail/fetchServiceById",
  async (serviceId) => {
    const responses = api.fetchServiceById(serviceId);
    return responses;
  }
);

const serviceDetailSlice = createSlice({
  name: "serviceDetail",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceById.pending, (state) => {
        console.log("loading detail");
        state.loading = true;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        console.log("fetch detail success");
        state.data = action.payload;
        state.loading = false;
        state.error = null; // Clear error on success
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(state.error);
        state.loading = false;
      });
  },
});

export default serviceDetailSlice.reducer;
