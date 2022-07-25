import { configureStore } from "@reduxjs/toolkit";
import votersReducer from "./voters";

export default configureStore({
  reducer: {
    voters: votersReducer,
  },
});
