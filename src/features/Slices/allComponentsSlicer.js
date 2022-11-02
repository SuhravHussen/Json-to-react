import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: null,
  error: false,
};

const allComponentsSlice = createSlice({
  name: "allComponents",
  initialState,
  reducers: {
    setAllComponents: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAllComponents } = allComponentsSlice.actions;
export default allComponentsSlice.reducer;
