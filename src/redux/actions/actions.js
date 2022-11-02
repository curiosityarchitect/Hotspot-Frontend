import { createAction } from "@reduxjs/toolkit";

export const backgroundPermChange = createAction("permissions/backgroundPermChange");

export const foregroundPermChange = createAction("permissions/foregroundPermChange");

export const updateLocation = createAction("location/updateLocation");

export const updateMapEvents = createAction("map/updateEvents");

export const updateMyEvents = createAction("events/updateEvents");

export const updateNotification = createAction("social/updateNotification");