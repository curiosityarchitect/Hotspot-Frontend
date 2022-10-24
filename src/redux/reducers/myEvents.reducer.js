export default function myEventsReducer(state = [], action) {
    switch (action.type) {
        case "map/updateMyEvents": {
            return {
                ...state,
                myEvents: action.payload
            }
        }
        default: {
            return state;
        }
    }
}