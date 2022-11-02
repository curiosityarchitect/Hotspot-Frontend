export default function myEventsReducer(state = [], action) {
    switch (action.type) {
        case "events/updateEvents": {
            return action.payload  
        }
        default: {
            return state;
        }
    }
}