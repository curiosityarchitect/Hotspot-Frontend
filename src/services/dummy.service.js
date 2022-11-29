import { backendUrl } from "./const";
import axios from 'axios';

export async function dummyHit() {
    axios.post(`${backendUrl}/events`, 
    {
        name: "testing 3",
        longitude: 0,
        latitude: 0,
        numAttendees: 1,
        tags: [
            "pooga donga"
        ]
    },
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
       //console.log(response);
    })
    .catch((err) => {console.log(err)});
}