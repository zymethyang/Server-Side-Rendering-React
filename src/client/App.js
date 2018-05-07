import React from 'react';
import { renderRoutes } from 'react-router-config';
import HeaderPage from './pages/headerPage';
import { fetchCurrentUser } from './actions/index';


const App = ({ route }) => {
    return (
        <div>
            <HeaderPage />
            {renderRoutes(route.routes)}
        </div >
    );
}



export default {
    component: App
}