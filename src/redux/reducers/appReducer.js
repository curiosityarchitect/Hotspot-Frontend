

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
                location: action.payload,
                hasLocation: Boolean(action.payload)
            }
        }
        default: {
            return state;
        }
    }
}