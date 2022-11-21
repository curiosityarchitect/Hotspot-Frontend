import { combineReducers } from "@reduxjs/toolkit";
import { foregroundPermissionsReducer, backgroundPermissionsReducer } from "./permissions.reducer";
import userLocationReducer from "./userLocation.reducer";
import mapEventReducer from "./mapEvents.reducer"
import currUserReducer from "./currUser.reducer";
import friendLocationsReducer from "./friendLocation.reducers";

const appReducer = combineReducers({
    foregroundPerm: foregroundPermissionsReducer, 
    backgroundPerm: backgroundPermissionsReducer,
    userLocation: userLocationReducer,
    mapEvents: mapEventReducer,
    currUser: currUserReducer,
    friendLocations: friendLocationsReducer
});

export default appReducer;