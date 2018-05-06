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

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    })
    
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });

});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})