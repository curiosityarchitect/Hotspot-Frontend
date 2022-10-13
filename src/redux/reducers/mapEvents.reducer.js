export default function mapEventReducer(state = [], action) {
    switch (action.type) {
        case "map/updateEvents": {
            return {
                ...state,
                mapEvents: action.payload
            }
        }
        default: {
            return state;
        }
    }
}