import React, { Component } from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import Instructions from './Instructions';
import Leaderboard from './Leaderboard';
import tv_static2 from '../tv_static2.jpg';
import MultipleChoice from './MultipleChoice';
import { connect } from 'react-redux';


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

const ButtonLine = styled.div`
    display: flex;


    @media screen and (max-width: 750px) {
        margin: 0 360px;
    }

    @media screen and (max-width: 700px) {
        margin: 0 340px;
    }

    @media screen and (max-width: 675px) {
        margin: 0 320px;
    }

    @media screen and (max-width: 650px) {
        margin: 0 300px;
    }

    @media screen and (max-width: 625px) {
        margin: 0 290px;
    }

    @media screen and (max-width: 600px) {
        margin: 0 270px;
    }

    @media screen and (max-width: 575px) {
        margin: 0 235px;
    }
`

const StartGameButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 20px;
    width: 150px;
    border-radius: 8px;
    box-sizing: border-box;
    border: solid 3px black;
    position: relative;
    right: 5px;

    @media screen and (max-width: 850px) {
        font-size: 14px;
        width: 120px;
        margin: 30px;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
        width: 110px;
    }

    @media screen and (max-width: 575px) {
        font-size: 14px;
        width: 100px;
    }

`;

const HowToPlayButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 20px;
    width: 150px;
    border-radius: 8px;
    box-sizing: border-box;
    border: solid 3px black;
    position: relative;
    right: 5px;

    @media screen and (max-width: 850px) {
        font-size: 14px;
        width: 120px;
        margin: 30px;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
        width: 110px;
    }

    @media screen and (max-width: 575px) {
        font-size: 14px;
        width: 100px;
    }

`;

const ButtonLine2 = styled.div`
    display: flex;


    @media screen and (max-width: 750px) {
        margin: 0 360px;
    }

    @media screen and (max-width: 700px) {
        margin: 0 340px;
    }

    @media screen and (max-width: 675px) {
        margin: 0 320px;
    }

    @media screen and (max-width: 650px) {
        margin: 0 300px;
    }

    @media screen and (max-width: 625px) {
        margin: 0 290px;
    }

    @media screen and (max-width: 600px) {
        margin: 0 270px;
    }

    @media screen and (max-width: 575px) {
        margin: 0 235px;
    }
`;

const LeaderboardButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 5px;
    width: 130px;
    border-radius: 8px;
    box-sizing: border-box;
    border: solid 3px black;
    position: relative;
    top: 10px;
    right: 5px;

    @media screen and (max-width: 850px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
        width: 110px;
    }

    @media screen and (max-width: 575px) {
        font-size: 14px;
        width: 100px;
    }
`;

class HomePage extends React.Component {

    state = {
        clickedGame: false,
        clickedHowTo: false,
        clickedLeaderboard: false
    }

    handleClickGame () {
        this.setState({
          clickedGame: true,
          clickedHowTo: false,
          clickedLeaderboard: false
        })
      }

    handleClickHowTo () {
        this.setState({
            clickedGame: false,
            clickedHowTo: true,
            clickedLeaderboard: false
        })
    }

    handleClickLeaderboard () {
        this.setState({
            clickedGame: false,
            clickedHowTo: false,
            clickedLeaderboard: true
        })
    }

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

        if (this.state.clickedGame === false && this.state.clickedHowTo === false && this.state.clickedLeaderboard === false) {

        return(
            <StartGameBackground>
                <StyledStartGame>
                    <StartGameTitle>
                        Bingemasters
                    </StartGameTitle>
                    <ButtonLine>
                        <StartGameButton 
                            type="submit"
                            onClick={this.handleClickGame.bind(this)}
                            >Start Game      
                        </StartGameButton>
                        <HowToPlayButton
                            type="submit"
                            onClick={this.handleClickHowTo.bind(this)}
                            >How to Play   
                        </HowToPlayButton>
                    </ButtonLine>
                    <ButtonLine2>
                        <LeaderboardButton
                            type="submit"
                            onClick={this.handleClickLeaderboard.bind(this)}
                            >All-Time Leaderboard
                        </LeaderboardButton>

                        {this.renderContent()}
                    </ButtonLine2>
                </StyledStartGame>
            </StartGameBackground>

        )} else if (this.state.clickedGame === true && this.state.clickedHowTo === false && this.state.clickedLeaderboard === false) {
            return <MultipleChoice/>
    }      else if (this.state.clickedGame === false && this.state.clickedHowTo === true && this.state.clickedLeaderboard === false) {
            return <Instructions/>
    }      else if (this.state.clickedGame === false && this.state.clickedHowTo === false && this.state.clickedLeaderboard === true) {
            return <Leaderboard/>
    }
}}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(HomePage);