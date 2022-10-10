const initialState = {
    backgroundPerm: false,
    foregroundPerm: false
};

export default function appReducer(state = initialState, action) {
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
        default: {
            return state;
        }
    }
}