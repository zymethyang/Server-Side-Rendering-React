import axios from 'axios';
import * as Type from '../constants/ActionTypes';
import callApi from '../utils/callAPI';
import syncData from '../utils/syncData';
import getRelated from '../utils/getRelated';
import trendingAPI from '../utils/trendingAPI';
import trendingCategory from '../utils/trendingCategory';
import searchAPI from '../utils/searchAPI';

export const fetchUsers = () => async (dispatch, getState) => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
    dispatch({
        type: Type.FETCH_USERS,
        payload: res
    });
};

export const fetchCurrentUser = () => async (dispatch, getState) => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/current_user');
    dispatch({
        type: Type.FETCH_CURRENT_USER,
        payload: res
    })
}

export const get_player = (id) => async (dispatch, getState) => {
    const res = await callApi(id);
    dispatch({
        type: Type.GET_VIDEO_DETAIL_FROM_ID,
        player: data
    })
}

export const get_newest_video = () => async (dispatch, getState) => {
    const res = await axios.get('https://backend-video.herokuapp.com/video/get/8');
    dispatch({
        type: Type.GET_NEWES_VIDEO,
        newest: res.data
    })
}

export const get_related_video = (id) => async (dispatch, getState) => {
    const res = await getRelated(id);
    dispatch({
        type: Type.GET_RELATED_VIDEO,
        related: data
    })
}

export const get_trending_video = () => async (dispatch, getState) => {
    const res = await trendingAPI();
    dispatch({
        type: Type.GET_TRENDING_VIDEO,
        trending: data
    })
}


export const get_trending_music = () => async (dispatch, getState) => {
    const res = trendingCategory('10');
    dispatch({
        type: Type.GET_TRENDING_MUSIC,
        music: data
    })
}


export const get_trending_movie = () => async (dispatch, getState) => {
    const res = await trendingCategory('1');
    dispatch({
        type: Type.GET_TRENDING_MOVIE,
        movie: data
    })
}

export const get_trending_game = () => async (dispatch, getState) => {
    const res = await trendingCategory('20');
    dispatch({
        type: Type.GET_TRENDING_GAME,
        game: data
    })
}

export const get_trending_sport = () => async (dispatch, getState) => {
    const res = await trendingCategory('17');
    dispatch({
        type: Type.GET_TRENDING_SPORT,
        sport: data
    })
}

export const get_search = (key) => async (dispatch, getState) => {
    const res = await searchAPI(key);
    dispatch({
        type: Type.GET_SEARCH,
        search: data
    })
}

