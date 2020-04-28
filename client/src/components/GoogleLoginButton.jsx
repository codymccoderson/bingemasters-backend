import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class GoogleLoginButton extends Component {
  
  state = {
    isLoggedIn: false,
    userID: ""
  }

  responseGoogle = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID
    })

  }

  componentClicked = () => console.log("clicked");

  render () {

    let googleContent;

    if (this.state.isLoggedIn) {
      googleContent = null;
    } else {
      googleContent = (<GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      onClick={this.componentClicked}
      cookiePolicy={'single_host_origin'}
      />)
    }
    return(
      <div>
        {googleContent}
      </div>
    )
  }
}

export default GoogleLoginButton;
