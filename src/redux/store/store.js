import appReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    currUser: {
        username: "alexwu",
        _id: "63803d09202b9146d223c593"
    }
}

export const store = configureStore({
    reducer: appReducer,
    preloadedState: initialState
});