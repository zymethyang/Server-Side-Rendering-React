import axios from 'axios';

export default function getRelated(id) {
    return axios({
        method: 'GET',
        url: `http://207.148.28.120:5000/video/get/50/${id}`,
    }).catch(err => {
        throw err;
    });
};