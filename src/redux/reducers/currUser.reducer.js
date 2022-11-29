export default function currUserReducer(state = {}, action) {
    switch (action.type) {
        case "user/setCurrUser": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}