import axios from 'axios';

export default function getRelated(id) {
    return axios({
        method: 'GET',
        url: `https://backend-video.herokuapp.com/video/get/50/${id}`,
    }).catch(err => {
        throw err;
    });
};