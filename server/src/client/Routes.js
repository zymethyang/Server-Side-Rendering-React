import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import App from './App';
import viewPage from './pages/viewPage';


export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...viewPage,
                path: '/view/:title/:id'
            }
        ]
    }
];

