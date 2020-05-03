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
    width: 700px;
    height: 700px;
    margin: 0 auto;
    padding-left: 0;
    position: relative;
    top: 150px;
    right: 150px;

    @media screen and (max-width: 1430px) {
        margin: 0 390px;
        width: 700px;
        height: 700px;

    }

    @media screen and (max-width: 1400px) {
        margin: 0 380px;
        width: 660px;
        height: 660px;

    }
    @media screen and (max-width: 1390px) {
        margin: 0 370px;
        width: 620px;
        height: 620px;
    }

    @media screen and (max-width: 1340px) {
        margin: 0 370px;
        width: 580px;
        height: 580px;
    }

    @media screen and (max-width: 1290px) {
        margin: 0 360px;
        width: 540px;
        height: 540px;
    }

    @media screen and (max-width: 1240px) {
        margin: 0 360px;
        width: 500px;
        height: 500px;
    }

    @media screen and (max-width: 1190px) {
        margin: 0 380px;
        width: 460px;
        height: 460px;
    }

    @media screen and (max-width: 1140px) {
        margin: 0 380px;
        width: 420px;
        height: 420px;
    }

    @media screen and (max-width: 1090px) {
        margin: 0 340px;
        width: 420px;
        height: 420px;
    }

    @media screen and (max-width: 1040px) {
        margin: 0 340px;
        width: 400px;
        height: 400px;
    }

    @media screen and (max-width: 990px) {
        margin: 0 330px;
        width: 380px;
        height: 380px;
    }

    @media screen and (max-width: 940px) {
        margin: 0 330px;
        width: 360px;
        height: 360px;
    }

    @media screen and (max-width: 890px) {
        margin: 0 320px;
        width: 340px;
        height: 340px;
    }

    @media screen and (max-width: 850px) {
        margin: 0 320px;
        width: 480px;
        height: 480px;
    }

    @media screen and (max-width: 840px) {
        margin: 0 280px;

    }

    @media screen and (max-width: 790px) {
        margin: 0 260px;
        width: 460px;
        height: 460px;
    }

    @media screen and (max-width: 740px) {
        margin: 0 240px;
        width: 440px;
        height: 440px;
    }

    @media screen and (max-width: 690px) {
        margin: 0 220px;
        width: 420px;
        height: 420px;
    }

    @media screen and (max-width: 640px) {
        margin: 0 200px;
        width: 400px;
        height: 400px;
    }
`;

const HowToPlayTitle = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 1400px) {
        font-size: 42px;
    }

    @media screen and (max-width: 850px) {
        font-size: 42px;
        color: black;
    }
`;

const WhatTheGameIs = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 24px;

    @media screen and (max-width: 1400px) {
        font-size: 22px;
    }

    @media screen and (max-width: 850px) {
        font-size: 22px;
        font-weight: bolder;
        color: #b7e6f0;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    
`

const Text = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;

    @media screen and (max-width: 1400px) {
        font-size: 16px;
    }

    @media screen and (max-width: 850px) {
        font-size: 16px;
        font-weight: bolder;
        color: pink;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
`

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

const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border-radius: 8px;
    box-sizing: border-box;
    border: solid 3px black;
    position: relative;
    right: 5px;

    @media screen and (max-width: 850px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 800px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 750px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 700px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 675px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 650px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 625px) {
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

class Instructions extends React.Component {

    state = {
        clickedReturn: false
    }

    handleClickReturn () {
        this.setState({
          clickedReturn: true
        })
      }

    render() {

        if (this.state.clickedReturn === false) {

        return(
            <StartGameBackground>
                <StyledStartGame>
                    <div className="Instructions">
                        <HowToPlayTitle>
                            How To Play
                        </HowToPlayTitle>
                        <WhatTheGameIs>
                            Bingemasters is a single player trivia game where players guess the name of the actor that appears on screen.
                        </WhatTheGameIs>
                        <ul>
                            <li>
                                <Text>
                                    Players have 45 seconds to guess the actor in question.
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Players must correctly spell the actor's name in the input field to score a point.
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    The goal of the game is to record the highest streak of correct answers and the highest streaks of all-time will be kept on the global leaderboard.
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    The game will end if your timer reaches zero. But don't fret! You can just play again!
                                </Text>
                            </li>
                        </ul>
                    </div>
                    <ButtonLine>
                        <ReturnHomeButton 
                            type="submit"
                            onClick={this.handleClickReturn.bind(this)}
                            >Return Home      
                        </ReturnHomeButton>
                    </ButtonLine>
                </StyledStartGame>
            </StartGameBackground>
        )} else {
            return <HomePage/> 
}}}

export default Instructions;