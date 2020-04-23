import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='Home'>
                <p>This is the home page</p>
                <a href="/auth/google">Log in with Google</a>
            </div>
          );
    }
}
 
export default Home;