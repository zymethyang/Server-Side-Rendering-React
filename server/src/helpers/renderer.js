import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routers from '../client/Routes';

export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <Routers />
        </StaticRouter>
    );
    return `
        <html>
            <head>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};