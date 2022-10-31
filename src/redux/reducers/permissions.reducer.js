export function foregroundPermissionsReducer(state = false, action) {
    switch (action.type) {
        case "permissions/foregroundPermChange": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export function backgroundPermissionsReducer(state = false, action) {
    switch (action.type) {
        case "permissions/backgroundPermChange": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}