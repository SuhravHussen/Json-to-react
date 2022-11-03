import { createSlice, current } from "@reduxjs/toolkit";

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
      let element = {
        ...state.data.data[action.payload.id],
      };

      if (element.settings) {
        element = {
          ...element,
          settings: {
            ...element.settings,
            style: {
              ...element.settings.style,
              desktop: {
                ...element.settings.style.desktop,
                color: action.payload.color,
              },
              mobile: {
                ...element.settings.style.mobile,
                color: action.payload.color,
              },
              tablet: {
                ...element.settings.style.tablet,
                color: action.payload.color,
              },
            },
          },
        };
        state.data.data[action.payload.id] = element;
      }
    },
    updateText: (state, action) => {
      const element = { ...state.data.data[action.payload.id] };
      if (element.setting.general) {
        element.settings.general.text = action.payload.text;
        state.data.data[action.payload.id] = element;
      }
    },
  },
});

export const { setAllComponents, updateColor, setLoading, updateText } =
  allComponentsSlice.actions;
export default allComponentsSlice.reducer;
