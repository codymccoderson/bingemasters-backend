import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import { connect } from 'react-redux';
import * as actions from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    // dev test
    console.log(this.props);
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={ Home }/>
          </Switch>
        </Router>
        
      </div>
    );
  }
};

export default connect(null, actions) (App);
