import appReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    foregroundPerm: false,
    backgroundPerm: false,
    mapEvents: [],
    myEvents:[]
}

export const store = configureStore({
    reducer: appReducer,
    preloadedState: initialState
});