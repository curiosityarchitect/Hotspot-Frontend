import { setAttendingEvents } from '../services/events.service';
import * as Location from 'expo-location';
import { GEOFENCING_TASK } from './taskManager.util';
import { updateAttendingEvents } from '../redux/actions/actions';
import { store } from '../redux/store/store';

const updateGeofencing = async () => {

    const events = await setAttendingEvents(store.getState().currUser._id);

    // only change geofencing areas if necessary
    if (JSON.stringify(events) !== JSON.stringify(store.getState().attendingEvents)) {

        const regions = events
            // for sake of testing, set to 7 days
            .filter((event) => Math.abs(new Date(event.startDate) - new Date()) < 60 * 60 * 1000 * 24 * 7)
            .map((event) => ({
                identifier: event._id, 
                longitude: event.location.coordinates[0],
                latitude: event.location.coordinates[1],
                notifyOnEnter: true,
                notifyOnExit: false,
                radius: 100
            }));

        console.log(regions);

        if (regions.length > 0) {
            Location.startGeofencingAsync(GEOFENCING_TASK, regions);
        }
        store.dispatch(updateAttendingEvents(events));
    }
}

export const beginAttendingEventGeofencing = async () => {
    setInterval(updateGeofencing, 5000);
};