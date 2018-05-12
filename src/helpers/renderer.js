import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routers from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

export default (req, store, id) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <div>
                    {renderRoutes(Routers)}
                </div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();


    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>
                .slick-slide {
                    height:250px;
                 }
                 
                 .slick-slide img {
                    height:200px;
                 }
                </style>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="https://content.jwplatform.com/libraries/5d9utaew.js"></script>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                    cfg = {
                        file: 'https://www.youtube.com/watch?v=${id}',
                        width: '100%',
                        height: '100%'
                    };
                    jwplayer("frame").setup(cfg);
                </script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};