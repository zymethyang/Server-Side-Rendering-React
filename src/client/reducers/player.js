import * as Type from '../constants/ActionTypes';
var initialState = {
    _id: null,
    id: null,
    tags: null,
    privacy: null,
    srt: null,
    remote: null,
    embed: null,
    nsfw: null,
    disliked: null,
    liked: null,
    views: null,
    category: null,
    description: null,
    duration: null,
    thumb: null,
    title: null,
    tmp_source: null,
    source: null,
    featured: null,
    date: null,
    user_id: null,
    private: null,
    pub: null,
    token: null,
    media: null
};

const player = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_VIDEO_DETAIL_FROM_ID:
            state = action.player
    }
    return state;
}

export default player;