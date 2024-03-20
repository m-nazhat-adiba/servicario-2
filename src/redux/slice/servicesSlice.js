import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { nDb } from "../../db";

// Define a thunk action creator to fetch services asynchronously
export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const snapshot = await nDb.collection("services").get();
    const servicesData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return servicesData;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    items: [], // Start with an empty array
    loading: false, // Add loading state
    error: null, // Add error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        console.log("loading");
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        console.log("doc", state.items);
      })
      .addCase(fetchServices.rejected, (state, action) => {
        console.log("failed fetch");
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
