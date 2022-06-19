import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../redux/features/PostSlice";

export default configureStore({
  reducer: {
    app: PostReducer,
  },
});
