import * as Type from '../constants/ActionTypes';
var initialState = {
};

const player = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_VIDEO_DETAIL_FROM_ID:
            state = action.player;
    }
    return state;
}

export default player;