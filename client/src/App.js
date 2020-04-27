import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import HiScorePost from './components/HiScorePost';
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
            {/* <Route exact path='/auth/scores' component={ HiScorePost }/> */}
          </Switch>
        </Router>
        
      </div>
    );
  }
};

export default connect(null, actions) (App);
