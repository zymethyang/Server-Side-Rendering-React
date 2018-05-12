import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';
import { related_video, player } from './client/shared/dispatch';


const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const store = createStore(req);
    const newest_video = Routes[0].routes[0].newest_video(store);
    const trending_video = Routes[0].routes[0].trending_video(store);
    const trending_music = Routes[0].routes[0].trending_music(store);
    const trending_sport = Routes[0].routes[0].trending_sport(store);
    const trending_game = Routes[0].routes[0].trending_game(store);
    const trending_movie = Routes[0].routes[0].trending_movie(store);
    Promise.all([newest_video, trending_video, trending_music, trending_sport, trending_game, trending_movie]).then(() => {
        setTimeout(() => {
            res.send(renderer(req, store));
        }, 400)
    })
});


app.get('/view/:title/:id', (req, res, next) => {
    const store = createStore(req);
    const related_video_load = related_video(store, req.params.id);
    const player_load = player(store, req.params.id);
    Promise.all([related_video_load, player_load]).then(() => {
        setTimeout(() => {
            res.send(renderer(req, store, req.params.id));
        }, 200)
    })
});

var port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})