export default function notificationReducer(state = [], action) {
    switch (action.type) {
        case "social/updateNotification": {
            return action.payload
            
        }
        default: {
            return state;
        }
    }
}