export default function currUserReducer(state = null, action) {
    switch (action.type) {
        case "user/setCurrUser": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}