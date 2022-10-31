export default function locationReducer(state = null, action) {
    switch (action.type) {
        case "location/updateLocation": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}