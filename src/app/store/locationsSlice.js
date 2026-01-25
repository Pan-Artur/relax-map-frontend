import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selected: null,
  loading: false,
  error: null,
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setLocations: (state, action) => {
      state.list = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selected = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { setLocations, setSelectedLocation, setLoading, setError } = locationsSlice.actions;
export default locationsSlice.reducer;