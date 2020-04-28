import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import HomePage from './components/HomePage';
import { connect } from 'react-redux';
import * as actions from './actions'
import Leaderboard from './components/Leaderboard';

class App extends Component {

  render() {
    // dev test
    console.log(this.props);
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route exact path='/homepage' component={ Home}/>
            <Route exact path='/scoreslist' component={ Leaderboard }/>
          </Switch>
        </Router>
        
      </div>
    );
  }
};

export default connect(null, actions) (App);
