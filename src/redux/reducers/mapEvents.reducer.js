export default function mapEventReducer(state = [], action) {
    switch (action.type) {

        case "map/updateMapEvents": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}