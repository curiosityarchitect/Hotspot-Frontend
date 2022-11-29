import appReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
}

export const store = configureStore({
    reducer: appReducer,
    preloadedState: initialState
});