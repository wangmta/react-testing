import React, { Fragment } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect to={'/home'} />
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
