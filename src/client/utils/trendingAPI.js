import axios from 'axios';

export default function trendingAPI() {
    return axios({
        method: 'GET',
        url: `https://backend-video.herokuapp.com/video/get/50`,
    }).catch(err => {
        throw err;
    });
};