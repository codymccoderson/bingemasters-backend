import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import MultipleChoice from './MultipleChoice';
import tv_static2 from '../tv_static2.jpg';

const GameOverBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh; 
    font-size: 16px;

    @media screen and (max-width: 53.125rem) {
        background: url(${tv_static2}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;
    } 
`

const StyledGameOver = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 12.5rem;
    height: 12.5rem;
    margin: 0 auto;
    position: relative;
    top: 15rem;
    right: 9rem;

    @media screen and (max-width: 68rem) {
        margin: 0 30rem;
    }

    @media screen and (max-width: 65rem) {
        margin: 0 28rem;
    }

    @media screen and (max-width: 62.5rem) {
        margin: 0 26.875rem;
    }

    @media screen and (max-width: 59.375rem) {
        margin: 0 26.25rem;
    }

    @media screen and (max-width: 54.375rem) {
        margin: 0 25rem;
    }

    @media screen and (max-width: 53.125rem) {
        margin: 0 28rem;
        position: relative;
        bottom: 4rem;
    }

    @media screen and (max-width: 48rem) {
        margin: 0 27rem;
    }

    @media screen and (max-width: 46.875rem) {
        margin: 0 24rem;
    }

    @media screen and (max-width: 43.750rem) {
        margin: 0 23rem;
    }
    
    @media screen and (max-width: 42.188rem) {
        margin: 0 22rem;
    }

    @media screen and (max-width: 40.625rem) {
        margin: 0 21rem;
    }

    @media screen and (max-width: 39.063rem) {
        margin: 0 20rem;
    }

    @media screen and (max-width: 37.5rem) {
        margin: 0 19rem;
    }

    @media screen and (max-width: 36.563rem) {
        margin: 0 18rem;
    }

    @media screen and (max-width: 35.938rem) {
        margin: 0 17rem;
    }

    @media screen and (max-width: 26.563rem) {
        margin: 0 16rem;
    }

    @media screen and (max-width: 23.438rem) {
        margin: 0 14.7rem;
    }

    @media screen and (max-width: 20rem) {
        margin: 0 13rem;
    }
`;

const GameOverTitle = styled.h1`
    color: black;
    font-family: 'Retro', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 2rem;
`;

const ButtonLine = styled.div`
    display: flex;


    @media screen and (max-width: 46.875rem) {
        margin: 0 22.5rem;
    }

    @media screen and (max-width: 43.75rem) {
        margin: 0 21.25rem;
    }

    @media screen and (max-width: 42.188rem) {
        margin: 0 20rem;
    }

    @media screen and (max-width: 40.625rem) {
        margin: 0 18.75rem;
    }

    @media screen and (max-width: 39.063rem) {
        margin: 0 18.125rem;
    }

    @media screen and (max-width: 37.5rem) {
        margin: 0 16.875rem;
    }

    @media screen and (max-width: 35.938rem) {
        margin: 0 14.688rem;
    }
`

const PlayAgain = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1rem;
    padding: 0.625rem;
    margin: 0.5rem;
    width: 8rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    right: 0.313rem;
    @media screen and (max-width: 53.125rem) {
        font-size: 0.875rem;
        width: 7.5rem;
    }
`;

const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1rem;
    padding: 0.625rem;
    margin: 0.5rem;
    width: 8rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    right: 0.313rem;
    @media screen and (max-width: 53.125rem) {
        font-size: 0.875rem;
        width: 7.5rem;
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