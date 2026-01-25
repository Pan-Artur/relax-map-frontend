import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    loadFromLocalStorage: (state) => {
      const saved = localStorage.getItem("auth");

      if (saved) {
        const parsed = JSON.parse(saved);

        state.user = parsed.user;
        state.token = parsed.token;
      }
    }
  }
});

export const { login, logout, loadFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;