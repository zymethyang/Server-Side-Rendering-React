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
    Routes[0].routes[0].trending_movie(store).then(() => {
        setTimeout(() => {
            res.send(renderer(req, store));
        }, 1000);
    })
    Routes[0].routes[0].newest_video(store);
    Routes[0].routes[0].trending_video(store);
    Routes[0].routes[0].trending_music(store);
    Routes[0].routes[0].trending_sport(store);
    Routes[0].routes[0].trending_game(store);
});


app.get('/view/:title/:id', (req, res, next) => {
    const store = createStore(req);
    related_video(store, req.params.id);
    player(store, req.params.id).then(() => {
        setTimeout(() => {
            res.send(renderer(req, store, req.params.id));
        }, 200)
    });
});

var port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})