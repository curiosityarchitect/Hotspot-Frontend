import { createAction } from "@reduxjs/toolkit";

export const backgroundPermChange = createAction("permissions/backgroundPermChange");

export const foregroundPermChange = createAction("permissions/foregroundPermChange");

export const updateLocation = createAction("userLocation/updateLocation");

export const updateMapEvents = createAction("map/updateEvents");

export const setUser = createAction("user/setCurrUser");

export const updateFriendLocations = createAction("friendLocations/updateLocations");

export const updateAttendingEvents = createAction("events/updateAttendingEvents");