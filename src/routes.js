import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App';
import Button from './components/Button';
import LandingPage from './components/LandingPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path='/login' component={Button}/>
    </Route>
);