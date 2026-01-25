import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice.js";
import locationsReducer from "./locationsSlice.js";
import reviewsReducer from "./reviewsSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    locations: locationsReducer,
    reviews: reviewsReducer,
  }
});
