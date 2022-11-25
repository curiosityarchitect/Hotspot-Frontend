export default function userLocationReducer(state = null, action) {
    switch (action.type) {
        case "userLocation/updateLocation": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}