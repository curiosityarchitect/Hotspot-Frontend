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



export async function createEvent(name,address='krusty krab',description, longitude=0, latitude=0, username, numAttendees=1,capacity, startDate = 1/11/11, endDate = 2/22/22,tags=[],invitees=[]) {
    return axios.post(`${backendUrl}/events`, 
    {
        name: name,
        address: address,
        description: description,
        longitude: longitude,
        latitude: latitude,
        username: username,
        numAttendees: numAttendees,
        capacity: capacity,
        startDate: startDate,
        endDate: endDate,
        tags: tags,
        invitees: invitees
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


export async function tagID(id) {
    return axios.get(`${backendUrl}/events/${id}/tags`,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
}