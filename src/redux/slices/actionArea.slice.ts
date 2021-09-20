import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface showType {
  dayFilter: string;
  projectFilter: string;
}

const initialState: showType = {
  dayFilter: "Inbox",
  projectFilter: "",
};

export const slice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setDayFilter: (state, action: PayloadAction<string>) => {
      state.dayFilter = action.payload;
    },
    setProjectFilter: (state, action: PayloadAction<string>) => {
      state.projectFilter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDayFilter, setProjectFilter } = slice.actions;

export default slice.reducer;
