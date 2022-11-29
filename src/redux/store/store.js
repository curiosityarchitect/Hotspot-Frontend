import appReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    currUser: {
        username: "wangedge",
        _id: "6374679b1efa6ec7be761d55"
    }
}

export const store = configureStore({
    reducer: appReducer,
    preloadedState: initialState
});