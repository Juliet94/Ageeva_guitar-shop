import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './app.module.scss';

import {AppRoute} from '../../const';

import Catalog from '../pages/catalog/catalog';
import Cart from '../cart/cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.CATALOG} >
          <Catalog />
        </Route>
        <Route exact path={AppRoute.CART} >
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
