import axios from 'axios';

export default function callApi(id) {
    return axios({
        method: 'GET',
        url: `https://backend-video.herokuapp.com/video/id/${id}`,
    }).catch(err => {
        throw err;
    });
};
