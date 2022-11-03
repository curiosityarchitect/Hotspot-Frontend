import { backendUrl } from "./const";
import { store } from "../redux/store/store";
import { updateMapEvents } from "../redux/actions/actions";
import axios from 'axios';

export async function setNearbyEvents(location) {
    if (!location)
        return;

    axios.get(`${backendUrl}/events`, 
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }, 
        params: { 
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            distance: 800
        }
    })
    .then((response) => {
        const events = response.data;
        store.dispatch(updateMapEvents(events));
    })
    .catch((err) => {console.log(err)});
}



export async function createEvent(name, longitude=0, latitude=0, numAttendees=1, tags=[]) {
    return axios.post(`${backendUrl}/events`, 
    {
        name: name,
        longitude: longitude,
        latitude: latitude,
        numAttendees: numAttendees,
        tags: tags
    },
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export async function findEventById(id) {
    return axios.get(`${backendUrl}/events/${id}`,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

