import { getLastLocation, getLocation, beginTracking } from './location.util';
import { store } from '../redux/store/store';
import { requestPermissions } from './permissions.util';

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
}