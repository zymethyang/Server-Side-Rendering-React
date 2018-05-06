import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import App from './App';


export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            }
        ]
    }
];

