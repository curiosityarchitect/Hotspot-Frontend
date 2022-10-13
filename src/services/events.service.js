import { backendUrl } from "./const";

export async function setNearbyEvents(location) {
    fetch(`${backendUrl}/events?longitude=${location.coords.longitude}&latitude=${location.coords.longitude}&distance=800`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        })
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setCloseEvents(json);
    })
    .catch((err) => {
        console.log(err);
    });
}

