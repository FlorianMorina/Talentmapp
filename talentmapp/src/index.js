import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';
import CursorComponent from './views/CursorComponent';
import GradientAnimation from './views/GradientAnimation'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={CursorComponent} path="/cursor" />
        <Route component={GradientAnimation} path="/gradient-animation" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
