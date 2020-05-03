import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import MultipleChoice from './MultipleChoice';

const GameOverBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh; 
`

const StyledGameOver = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding-left: 0;
    position: relative;
    top: 330px;
    right: 130px;

    @media screen and (max-width: 1000px) {
        margin: 0 430px;
    }

    @media screen and (max-width: 950px) {
        margin: 0 420px;
    }

    @media screen and (max-width: 900px) {
        margin: 0 400px;
    }

    @media screen and (max-width: 850px) {
        margin: 0 380px;
    }

    @media screen and (max-width: 800px) {
        margin: 0 360px;
    }

    @media screen and (max-width: 750px) {
        margin: 0 340px;
    }

    @media screen and (max-width: 700px) {
        margin: 0 320px;
    }

    @media screen and (max-width: 675px) {
        margin: 0 300px;
    }

    @media screen and (max-width: 650px) {
        margin: 0 290px;
    }

    @media screen and (max-width: 625px) {
        margin: 0 280px;
    }

    @media screen and (max-width: 600px) {
        margin: 0 270px;
    }

    @media screen and (max-width: 585px) {
        margin: 0 255px;
    }

    @media screen and (max-width: 575px) {
        margin: 0 240px;
    }
`;

const GameOverTitle = styled.h1`
    color: black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 36px;
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

const PlayAgain = styled.button`
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



const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 5px;
    margin-right: 30px;
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

class GameOver extends React.Component {

    state = {
        clicked: false,
        clickedHome: false
    }

    handleClick () {
        this.setState({
          clicked: true,
          clickedHome: false
        })
      }
    
    handleClickHome () {
        this.setState({
            clicked: false,
            clickedHome: true
        })
    }

    render() {
        
        if (this.state.clicked === false && this.state.clickedHome === false) {

        return(
            <GameOverBackground>
                <StyledGameOver>
                    <GameOverTitle>
                        Game Over.
                    </GameOverTitle>
                    <ButtonLine>
                        <ReturnHomeButton
                            type="submit"
                            onClick={this.handleClickHome.bind(this)}
                            >Return Home
                        </ReturnHomeButton>
                        <PlayAgain 
                            type="submit"
                            onClick={this.handleClick.bind(this)}
                            >Play Again
                        </PlayAgain>  
                    </ButtonLine>                 
                </StyledGameOver>
            </GameOverBackground>
        )} else if (this.state.clicked === true && this.state.clickedHome === false) {
            return <MultipleChoice/>
        }  else if (this.state.clicked === false && this.state.clickedHome === true) {
            return <HomePage/>
        } 
    }   
};

export default GameOver;