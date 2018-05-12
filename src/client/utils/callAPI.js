import axios from 'axios';

export default function callApi(id) {
    return axios({
        method: 'GET',
        url: `http://207.148.28.120:5000/video/id/${id}`,
    }).catch(err => {
        throw err;
    });
};
