import * as Type from '../constants/ActionTypes';


export default function (state = null, action) {
    switch (action.type) {
        case Type.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
}