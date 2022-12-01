import { getLastLocation, getLocation, beginTracking } from './location.util';
import { store } from '../redux/store/store';
import { requestPermissions } from './permissions.util';
import { initTaskManager } from './taskManager.util';
import { initDummyGeofencing } from './dummyGeofencing.util';
import { beginAttendingEventGeofencing } from './attendingEventGeofencing.util';

export function onBoot() {
    requestPermissions()
    .then(() => {
        if (store.getState().foregroundPerm) {
            getLastLocation();
            if (!store.getState().location)
                getLocation();
            beginTracking();
        }
        else if (store.getState().backgroundPerm);
    });

    initTaskManager();

    beginAttendingEventGeofencing();
}