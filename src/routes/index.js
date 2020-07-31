import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/home';
import Table from '../pages/table';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path = '/' exact />
            <Route component={Table} path = '/tablepage' />
        </BrowserRouter>
    );
}

export default Routes;
