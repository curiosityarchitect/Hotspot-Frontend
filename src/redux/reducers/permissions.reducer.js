export default function permissionsReducer(state = {}, action) {
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
        default: {
            return state;
        }
    }
}