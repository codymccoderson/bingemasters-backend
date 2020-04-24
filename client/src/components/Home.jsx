import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default: 
                return <li><a href="/api/logout">Logout</a></li>
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