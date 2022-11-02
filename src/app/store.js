import { configureStore } from "@reduxjs/toolkit";
import allComponentsReducer from "../features/Slices/allComponentsSlicer";

export const store = configureStore({
  reducer: {
    components: allComponentsReducer,
  },
});
