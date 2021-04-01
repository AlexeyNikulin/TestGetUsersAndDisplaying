import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (
    <>
      <Header />
      <div className="pages">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/users" component={UsersPage} exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default App;
