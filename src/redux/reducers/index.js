import { combineReducers } from "@reduxjs/toolkit";
import { foregroundPermissionsReducer, backgroundPermissionsReducer } from "./permissions.reducer";
import locationReducer from "./locations.reducer";
import mapEventReducer from "./mapEvents.reducer"
import currUserReducer from "./currUser.reducer";

const appReducer = combineReducers({
    foregroundPerm: foregroundPermissionsReducer, 
    backgroundPerm: backgroundPermissionsReducer,
    location: locationReducer,
    mapEvents: mapEventReducer,
    currUser: currUserReducer
});

export default appReducer;