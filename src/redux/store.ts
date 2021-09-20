import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "redux/slices/toggleDrawer.slice";
import actionAreaReducer from "redux/slices/actionArea.slice";

export const store = configureStore({
  reducer: {
    toggleReducer: toggleReducer,
    actionAreaReducer: actionAreaReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
