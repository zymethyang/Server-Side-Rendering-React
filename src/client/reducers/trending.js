import * as Type from '../constants/ActionTypes';
var initialState = [];

const trending = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TRENDING_VIDEO:
            state = action.trending
    }
    return state;
}

export default trending;