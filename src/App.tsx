import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Login from './pages/Login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
