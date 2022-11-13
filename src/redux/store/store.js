import appReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    foregroundPerm: false,
    backgroundPerm: false,
    mapEvents: [],
    currUser: {
        username: "evan",
        _id: "6346eccf33363d34433a4d4d"
    }
}

export const store = configureStore({
    reducer: appReducer,
    preloadedState: initialState
});