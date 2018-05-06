import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import player from './player';
import newest from './newest';
import related from './related';
import trending from './trending';
import music from './music';
import movie from './movie';
import game from './game';
import sport from './sport';
import search from './search';


export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    player: player,
    newest: newest,
    related: related,
    trending: trending,
    music: music,
    movie: movie,
    game: game,
    sport: sport,
    search: search
})