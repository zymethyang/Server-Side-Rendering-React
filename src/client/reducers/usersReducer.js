import * as Type from '../constants/ActionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case Type.FETCH_USERS:
            return action.payload.data;
        default:
            return state
    }
}