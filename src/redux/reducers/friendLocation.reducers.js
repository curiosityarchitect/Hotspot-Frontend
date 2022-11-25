export default function friendLocationsReducer(state = [], action) {
    switch (action.type) {
        case "friendLocations/updateLocations": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}