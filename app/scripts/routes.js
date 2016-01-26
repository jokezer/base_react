import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory'

import App from './pages/app.jsx';
import Orders from './pages/orders.jsx';
import Info from './pages/info.jsx';
import Profile from './pages/profile.jsx';
import NotFound from './pages/notFound.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={createHistory(historyOptions)}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Orders }/>
      <Route path='info' component={ Info } />
      <Route path='orders' component={ Orders } />
      //fixme
      <Route path='orders/:orderId' component={ Orders } />
      <Route path='profile' component={ Profile } />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;
