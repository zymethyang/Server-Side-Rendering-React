import * as Type from '../constants/ActionTypes';
import axios from 'axios';
var initialState = [
    {
        title: ' ',
        thumb: ' ',
        source: ' '
    }
];

const sport = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TRENDING_SPORT:
            let tmpVideo = [];
            action.sport.forEach((video, index) => {
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

export default sport;