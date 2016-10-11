import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './components/App';
import Landing from './components/Landing';

export default (
	
	  <Route path="/index.html" component={App}>
	    <IndexRoute component={Landing}/>
	  </Route>
	
	);

