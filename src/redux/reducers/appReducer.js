

export default function appReducer(state, action) {
    switch (action.type) {
        case "permissions/backgroundPermChange": {
            return {
                ...state,
                backgroundPerm: action.payload
            };
        }
        case "permissions/foregroundPermChange": {
            return {
                ...state,
                foregroundPerm: action.payload
            };
        }
        case "location/updateLocation": {
            return {
                ...state,
                location: action.payload
            }
        }
        case "map/updateMapEvents": {
            return {
                ...state,
                mapEvents: action.payload
            }
        }
        case "map/updateMyEvents": {
            return {
                ...state,
                events: action.payload
            }
        }
        default: {
            return state;
        }
    }
}