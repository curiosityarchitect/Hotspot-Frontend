import * as Location from 'expo-location';
import { GEOFENCING_TASK } from './taskManager.util';

export const initDummyGeofencing = async () => {
    const regions = [{
        identifier: "h", 
        longitude: -86.9123311,
        latitude: 40.4207122,
        notifyOnEnter: true,
        notifyOnExit: false,
        radius: 20
    }]
    Location.startGeofencingAsync(GEOFENCING_TASK, regions);
};