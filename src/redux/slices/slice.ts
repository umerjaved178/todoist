import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const mainSlice = createSlice({
  name: "toggleMobileSideDrawer",
  initialState,
  reducers: {
    toggleMobileDrawer: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMobileDrawer } = mainSlice.actions;

export default mainSlice.reducer;
