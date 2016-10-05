import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App';
import Landing from './components/Landing';

export default (
	
	  <Route path="/" component={App}>
	    <IndexRoute component={Landing}/>
	  </Route>
	
	);

