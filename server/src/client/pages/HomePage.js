import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_newest_video, get_trending_video, get_trending_music, get_trending_movie, get_trending_game, get_trending_sport, fetchUsers } from '../actions/index';

class HomePage extends Component {
    render() {
        return (
            <div>
                This is home
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    return {
        users: state.users
    }
}

function newest_video(store) {
    return store.dispatch(get_newest_video());
}

function trending_video(store) {
    return store.dispatch(get_trending_video());
}

function trending_music(store) {
    return store.dispatch(get_trending_music());
}

function trending_movie(store) {
    return store.dispatch(get_trending_movie());
}

function trending_game(store) {
    return store.dispatch(get_trending_game());
}


function trending_sport(store) {
    return store.dispatch(get_trending_sport());
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    newest_video,
    trending_video,
    trending_music,
    trending_movie,
    trending_game,
    trending_sport,
    component: connect(mapStateToProps, { get_newest_video, get_trending_video, get_trending_music, get_trending_movie, get_trending_game, get_trending_sport, fetchUsers })(HomePage)
}
