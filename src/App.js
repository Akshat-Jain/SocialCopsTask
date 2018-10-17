import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import CSV from './components/CSV/CSV.react';

class App extends Component {
  render() {
    return (
        <div>
            <Switch>
            <Route exact path="/" component={CSV} />
          </Switch>
        </div>
    );
  }
}

export default App;
