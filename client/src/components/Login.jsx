import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import tv_static2 from '../tv_static2.jpg';


const StartGameBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh; 

    @media screen and (max-width: 850px) {
        background: url(${tv_static2}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;

    }
`
const StyledStartGame = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding-left: 0;
    position: relative;
    top: 230px;
    right: 150px;

    @media screen and (max-width: 1380px) {
        margin: 0 590px;

    }
    @media screen and (max-width: 1320px) {
        margin: 0 545px;
    }

    @media screen and (max-width: 1180px) {
        margin: 0 515px;
    }

    @media screen and (max-width: 1180px) {
        margin: 0 500px;
    }

    @media screen and (max-width: 1080px) {
        margin: 0 480px;
    }

    @media screen and (max-width: 950px) {
        margin: 0 435px;
    }

    @media screen and (max-width: 900px) {
        margin: 0 400px;
    }

    @media screen and (max-width: 850px) {
        margin: 0 450px;
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 200px;
        height: 200px;
        padding-left: 0;
        position: relative;
        top: 230px;
    }

    @media screen and (max-width: 800px) {
        margin: 0 410px;
    }

    @media screen and (max-width: 750px) {
        margin: 0 400px;
    }

    @media screen and (max-width: 700px) {
        margin: 0 380px;
    }

    @media screen and (max-width: 675px) {
        margin: 0 350px;
    }

    @media screen and (max-width: 650px) {
        margin: 0 340px;
    }

    @media screen and (max-width: 625px) {
        margin: 0 330px;
    }

    @media screen and (max-width: 600px) {
        margin: 0 320px;
    }

    @media screen and (max-width: 585px) {
        margin: 0 310px;
    }

    @media screen and (max-width: 575px) {
        margin: 0 300px;
    }
`;

const StartGameTitle = styled.h1`
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 96px;

    @media screen and (max-width: 1380px) {
        font-size: 78px;
    }

    @media screen and (max-width: 1320px) {
        font-size: 72px;
    }

    @media screen and (max-width: 1180px) {
        font-size: 60px;
    }

    @media screen and (max-width: 1080px) {
        font-size: 48px;
    }

    @media screen and (max-width: 850px) {
        font-size: 60px;
    }

    @media screen and (max-width: 650px) {
        font-size: 52px;
    }  
`;

const FormWrapper = styled.div`

`
const TheActualForm = styled.form`
`

class Login extends React.Component {

    state = {
        isLoggedIn: false
    }

    handleClick () {
        this.setState({
          isLoggedIn: true
        })
      }

    render() {

        if (this.state.isLoggedIn === false) {

        return(
            <StartGameBackground>
                <StyledStartGame>
                    <StartGameTitle>
                        Bingemasters
                    </StartGameTitle>
                    <FormWrapper>
                        <TheActualForm onSubmit={this.handleClick.bind(this)}>
                            <a href="auth/google">Sign In With Google</a>
                        </TheActualForm>
                    </FormWrapper>
                </StyledStartGame>
            </StartGameBackground>
        )} else {
            return <HomePage/>   
    };
}}


export default Login;