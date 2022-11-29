export default function mapEventReducer(state = [], action) {
    switch (action.type) {
        case "map/updateEvents": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}