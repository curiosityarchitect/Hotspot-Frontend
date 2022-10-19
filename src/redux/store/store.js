import appReducer from "../reducers/appReducer";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    foregroundPerm: false,
    backgroundPerm: false,
    mapEvents: []
}

export const store = configureStore({
    reducer: appReducer,
    preloadedState: initialState
});