import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { errorMiddleware, loadingMiddleware } from "../features/global";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware, loadingMiddleware),
});

export default store;
