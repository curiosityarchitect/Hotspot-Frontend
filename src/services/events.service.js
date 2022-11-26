import { backendUrl } from "./const";
import { store } from "../redux/store/store";
import { updateMapEvents } from "../redux/actions/actions";
import axios from 'axios';

export async function setNearbyEvents(userid, location, specific) {
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
                distance: 800
            }) 
        }
    })
    .then((response) => {
        const events = response.data;
        store.dispatch(updateMapEvents(events));
    })
    .catch((err) => {console.log(err)});
}

export async function createEvent(eventDetails) {
    return axios.post(`${backendUrl}/events`, 
    {
        name: eventDetails.name,
        address: !eventDetails.address ? "" : eventDetails.address,
        description: !eventDetails.description ? "" : eventDetails.description,
        longitude: !eventDetails.longitude ? 0 : eventDetails.longitude,
        latitude: !eventDetails.latitude ? 0 : eventDetails.latitude,
        username: eventDetails.username,
        numAttendees: 0,
        capacity: !eventDetails.capacity ? 0 : eventDetails.capacity,
        startDate: !eventDetails.startDate ? 0 : eventDetails.startDate,
        endDate: !eventDetails.endDate ? 0 : eventDetails.endDate,
        cover: !eventDetails.cover ? "" : eventDetails.cover,
        tags: eventDetails.tags,
        invitees: eventDetails.invitees,
        scope: eventDetails.scope

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


export async function tagID(id) {
    return axios.get(`${backendUrl}/events/${id}/tags`,
    {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });

}