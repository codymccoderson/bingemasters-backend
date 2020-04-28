import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <a href="/auth/google" img src=''>Sign in with Google</a>
            default: 
                return <a href="/api/logout">Logout</a>
        }
    }
    render() { 
        // dev test
        console.log(this.props);
        return (
            <div className='Home'>
                <ul>
                    <li>This is the home page</li>
                    {this.renderContent()}
                </ul>
            </div>
          );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
 
export default connect(mapStateToProps)(Home);