import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    const store = createStore(req);
    console.log(store);

    Routes[0].routes[0].trending_movie(store);
    Routes[0].routes[0].newest_video(store);
    Routes[0].routes[0].trending_video(store);
    Routes[0].routes[0].trending_music(store);
    //Routes[0].routes[0].trending_sport(store);
    //Routes[0].routes[0].trending_game(store);

    setTimeout(() => {
        res.send(renderer(req, store));
    }, 2000);

});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})