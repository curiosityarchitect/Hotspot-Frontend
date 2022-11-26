import { combineReducers } from "@reduxjs/toolkit";
import { foregroundPermissionsReducer, backgroundPermissionsReducer } from "./permissions.reducer";
import userLocationReducer from "./userLocation.reducer";
import mapEventReducer from "./mapEvents.reducer"
import currUserReducer from "./currUser.reducer";
import friendLocationsReducer from "./friendLocation.reducers";
import attendingEventReducer from "./attendingEvents.reducer";

const appReducer = combineReducers({
    foregroundPerm: foregroundPermissionsReducer, 
    backgroundPerm: backgroundPermissionsReducer,
    userLocation: userLocationReducer,
    mapEvents: mapEventReducer,
    currUser: currUserReducer,
    friendLocations: friendLocationsReducer,
    attendingEvents: attendingEventReducer
});

export default appReducer;