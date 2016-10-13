import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import routes from './routes';

// Stylesheets
import './styles/index.less';

// Redux Store setup
const logger = createLogger({
    level: 'info',
    collapsed: true
});

// Create an enhanced history that syncs navigation events with the store

const middleware = [thunk, logger];

const store  = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

const history = syncHistoryWithStore(browserHistory, store);


const appMount = document.getElementById('app-mount-point');

render(
	<Provider store={store}>
		<Router history={history}>
			{ routes }
		</Router>
	</Provider>
	, appMount
);