import { createSlice } from "@reduxjs/toolkit";
import { getInfo } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  info: null,
  route: null,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getInfo.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = false;
      state.info = payload;
      state.route = payload.trail;
    });
  },
});

export default infoSlice.reducer;
