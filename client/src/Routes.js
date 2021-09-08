import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/UsersPage/index';
import NotFoundPage from './pages/NotFoundPage/index';
import CreateUserPage from './pages/CreateUserPage/index';
import UpdateUserPage from './pages/UpdateUserPage/index';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/create' exact>
          <CreateUserPage />
        </Route>
        <Route path='/update/:id' exact>
          <UpdateUserPage />
        </Route>
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
