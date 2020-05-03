import { FETCH_STREAK } from '../actions/types';

export default function (state = 0, action) {
    console.log(action);
    switch(action.type) {
        case FETCH_STREAK:
            return state.currentScore || false;
            default:
                return state;
    }
}
