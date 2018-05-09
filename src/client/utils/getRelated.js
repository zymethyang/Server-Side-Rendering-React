import axios from 'axios';

export default function getRelated(id) {
    return axios({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=AIzaSyCYT5cLNysbX6E8EXJJ7bbgd5Z7LwHBxcg&maxResults=50`,
    }).catch(err => {
        throw err;
    });
};