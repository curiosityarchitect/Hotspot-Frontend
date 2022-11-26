export default function attendingEventReducer(state = [], action) {
    switch (action.type) {
        case "events/updateAttendingEvents": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}