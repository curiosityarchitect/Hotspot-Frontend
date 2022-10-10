import appReducer from "../reducers/appReducer";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    backgroundPerm: false,
    foregroundPerm: false,
    location: null
};

export const store = configureStore({
    reducer: appReducer,
    preloadedState: initialState
});