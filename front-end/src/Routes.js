import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Produtos from './pages/Produtos';
import Registro from './pages/registro';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Registro } />
    <Route exact path="/customer/products" component={ Produtos } />
  </Switch>
);

export default Routes;
