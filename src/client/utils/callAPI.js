import axios from 'axios';

export default function callApi(id) {
    return axios({
        method: 'GET',
        url: `http://localhost:5000/video/id/${id}`,
    }).catch(err => {
        throw err;
    });
};
