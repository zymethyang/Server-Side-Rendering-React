import * as Type from '../constants/ActionTypes';
import axios from 'axios';
var initialState = [
    {
        title: ' ',
        thumb: ' ',
        source: ' '
    }
];

const game = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_TRENDING_GAME:
            let tmpVideo = [];
            action.game.forEach((video, index) => {
                return axios.get(video.thumb).then(res => {
                    if (res.status === 200) {
                        tmpVideo.push(video);
                    }
                }).catch(() => {

                });
            })
            state = tmpVideo;
    }
    return state;
}

export default game;