import { GeofencingEventType } from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { reportEventArrival } from '../services/events.service';
import { store } from "../redux/store/store";

export const GEOFENCING_TASK = "EVENT GEOFENCING";

export const initTaskManager = async () => {
    TaskManager.defineTask(GEOFENCING_TASK, ({ data: { eventType, region }, error }) => {
        if (error) {
            // check `error.message` for more details.
            return;
        }
        
        if (eventType === GeofencingEventType.Enter) {
            reportEventArrival(region.identifier, store.getState().currUser._id);
        } 
    });
};