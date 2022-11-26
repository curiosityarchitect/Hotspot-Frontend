import { GeofencingEventType } from 'expo-location';
import * as TaskManager from 'expo-task-manager';

export const GEOFENCING_TASK = "EVENT GEOFENCING";

export const initTaskManager = async () => {
    TaskManager.defineTask(GEOFENCING_TASK, ({ data: { eventType, region }, error }) => {
        if (error) {
            // check `error.message` for more details.
            return;
        }
        
        if (eventType === GeofencingEventType.Enter) {
            console.log("You've entered region:", region);
        } 
    });
};