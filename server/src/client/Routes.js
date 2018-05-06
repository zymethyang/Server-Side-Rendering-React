import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './App';


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
                ...UsersListPage,
                path: '/users'
            }
        ]
    }
];

