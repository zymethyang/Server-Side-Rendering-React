import * as Type from '../constants/ActionTypes';
import axios from 'axios';
var initialState = [
    {
        title: '',
        thumb: '',
        source: ' '
    }
];

const trending = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TRENDING_VIDEO:
            let tmpVideo = [];
            action.trending.forEach((video, index) => {
                return axios.get(video.thumb).then(res => {
                    if (res.status === 200) {
                        tmpVideo.push(video);
                    }
                }).catch(() => {

                });
            })
            state = tmpVideo;
            break;
    }
    return state;
}

export default trending;