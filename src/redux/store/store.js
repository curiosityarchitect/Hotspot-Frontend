import appReducer from "../reducers/appReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: appReducer
});