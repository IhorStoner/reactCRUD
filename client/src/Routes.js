import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import CreateUserPage from './pages/CreateUserPage';
import UpdateUserPage from './pages/UpdateUserPage';

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
