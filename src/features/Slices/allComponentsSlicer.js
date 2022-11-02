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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateColor: (state, action) => {
      const element = { ...state.data.data[action.payload.id] };
      if (element) {
        element.settings.style.desktop.color = action.payload.color;
        element.settings.style.mobile.color = action.payload.color;
        element.settings.style.tablet.color = action.payload.color;
        state.data.data[action.payload.id] = element;
      }
    },
    updateText: (state, action) => {
      const element = { ...state.data.data[action.payload.id] };
      if (element) {
        element.settings.general.text = action.payload.text;
        element.settings.general.text = action.payload.text;
        element.settings.general.text = action.payload.text;
        state.data.data[action.payload.id] = element;
      }
    },
    updateBgColor: (state, action) => {
      const element = { ...state.data.data[action.payload.id] };
      if (element) {
        element.settings.style.desktop.backgroundColor = action.payload.bgColor;
        element.settings.style.mobile.backgroundColor = action.payload.bgColor;
        element.settings.style.tablet.backgroundColor = action.payload.bgColor;
        state.data.data[action.payload.id] = element;
      }
    },
  },
});

export const {
  setAllComponents,
  updateColor,
  setLoading,
  updateText,
  updateBgColor,
} = allComponentsSlice.actions;
export default allComponentsSlice.reducer;
