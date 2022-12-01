import { setAttendingEvents } from '../services/events.service';
import * as Location from 'expo-location';
import { GEOFENCING_TASK } from './taskManager.util';
import { updateAttendingEvents } from '../redux/actions/actions';
import { store } from '../redux/store/store';

const updateGeofencing = async () => {
    if (!store.getState().currUser._id) {
        return;
    }

    const events = await setAttendingEvents(store.getState().currUser._id);

    // only change geofencing areas if necessary
    if (JSON.stringify(events) !== JSON.stringify(store.getState().attendingEvents)) {
        const currTime = new Date();

        const regions = events
            // Triggers an alert if user arrives within 6 hours before or during the event. 
            .filter((event) => {
                return ( currTime <= new Date(event.endDate) ) &&
                ( (new Date(event.startDate) - currTime) < 60 * 60 * 1000 * 6 )
            })
            .map((event) => ({
                identifier: event._id, 
                longitude: event.location.coordinates[0],
                latitude: event.location.coordinates[1],
                notifyOnEnter: true,
                notifyOnExit: false,
                radius: 100
            }));
        
        if (regions.length > 0) {
            Location.startGeofencingAsync(GEOFENCING_TASK, regions);
        } 

        store.dispatch(updateAttendingEvents(events));
    }
}

export const beginAttendingEventGeofencing = async () => {
    setInterval(updateGeofencing, 5000);
};