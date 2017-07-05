import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // this actually returns a new state, while push would modify the existing state.
            // 'return state.concat([action.payload.data]);' also valid.
            
            return [ action.payload.data, ...state]
    }
    return state;
}