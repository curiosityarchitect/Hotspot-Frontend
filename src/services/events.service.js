import { backendUrl } from "./const";
import { store } from "../redux/store/store";
import { updateMapEvents } from "../redux/actions/actions";
import axios from 'axios';

export async function setNearbyEvents(specific) {
    const userid = store.getState().currUser._id;
    const location = store.getState().userLocation;

    axios.get(`${backendUrl}/events`, 
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }, 
        params: { 
            // only query for user specific if a user id is provided
            ...(userid && {
                userid: userid
            }),
            ...(userid && specific && {
                specific: specific
            }),
            // only query for location specific if a location is provided
            ...(location && {
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
                distance: 6000
            }) 
        }
    })
    .then((response) => {
        const events = response.data;
        store.dispatch(updateMapEvents(events));
    })
    .catch((err) => {console.log(err)});
}

export async function createEvent(name, longitude, latitude, description, capacity, tags=[], startDate, endDate, eventScope, invitees) {
    const username = store.getState().currUser.username;

    if (!username) {
        return;
    }

    return axios.post(`${backendUrl}/events`, 
    {
        name: name,
        longitude: parseFloat(longitude),
        latitude: parseFloat(latitude),
        description: description,
        numAttendees: 1,
        capacity: parseInt(capacity),
        tags: tags,
        username: username,
        startDate: startDate,
        endDate: endDate,
        scope: eventScope,
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

export async function setAttendingEvents(userid) {
    if (!userid) {
        return;
    }
    
    const response = await axios.get(`${backendUrl}/user/${userid}/events/attending`, 
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .catch((err) => {console.log(err)});

    return response.data;
}

export async function reportEventArrival(eventid, userid) {
    if (!userid || !eventid) {
        return;
    }

    await axios.post(`${backendUrl}/events/${eventid}/arrivee`, 
    {
        arriveeId: userid
    },
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
}