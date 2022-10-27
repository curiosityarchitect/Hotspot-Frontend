import appReducer from "../reducers";
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