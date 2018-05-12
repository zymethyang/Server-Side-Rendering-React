import axios from 'axios';

export default function trendingAPI() {
    return axios({
        method: 'GET',
        url: `http://207.148.28.120:5000/video/get/50`,
    }).catch(err => {
        throw err;
    });
};