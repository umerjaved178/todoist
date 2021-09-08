import { createSlice } from "@reduxjs/toolkit";

interface showType {
  show: boolean;
}

const initialState: showType = {
  show: false,
};

export const slice = createSlice({
  name: "toggleMobileSideDrawer",
  initialState,
  reducers: {
    toggleMobileDrawer: (state) => {
      state.show = !state.show;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMobileDrawer } = slice.actions;

export default slice.reducer;
