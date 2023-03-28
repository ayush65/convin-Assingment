import { configureStore } from "@reduxjs/toolkit";

import imageReducer from "./reducer/postsReducer";

export const store = configureStore({
  reducer: {
    posts: imageReducer
  }
});
