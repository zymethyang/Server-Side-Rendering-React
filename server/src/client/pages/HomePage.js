import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_newest_video, get_trending_video, get_trending_music, get_trending_movie, get_trending_game, get_trending_sport } from '../actions/index';
import Home from '../components/home';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}


function mapStateToProps(state) {
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



export default {
    newest_video,
    trending_video,
    trending_music,
    trending_movie,
    trending_game,
    trending_sport,
    component: connect(mapStateToProps, { get_newest_video, get_trending_video, get_trending_music, get_trending_movie, get_trending_game, get_trending_sport })(HomePage)
}
