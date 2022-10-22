import { combineReducers } from "@reduxjs/toolkit";
import { foregroundPermissionsReducer, backgroundPermissionsReducer } from "./permissions.reducer";
import locationReducer from "./locations.reducer";
import mapEventReducer from "./mapEvents.reducer"

const mainReducer = combineReducers({
    foregroundPerm: foregroundPermissionsReducer, 
    backgroundPerm: backgroundPermissionsReducer,
    location: locationReducer,
    mapEvents: mapEventReducer
});

export default mainReducer;