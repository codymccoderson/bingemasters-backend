import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import tv_static2 from '../tv_static2.jpg';

const HowToPlayBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh;
    font-size: 16px; 
    @media screen and (max-width: 64rem) {
        background: url(${tv_static2}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;
    }
`
const CardWrapper = styled.div`
    @media screen and (max-width: 64rem) {
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 30rem;
        height: 36rem;
        margin: 0 auto;
        position: relative;
        top: 8rem;
        right: 0.5rem;
        background-color: whitesmoke;
        border-radius: 0.875rem;
        box-sizing: border-box;
        border: solid 0.2rem black;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        position: relative;
        top: 18rem;
        width: 38rem;
        height: 46rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        position: relative;
        top: 1rem;
        right: 0.2rem;
        width: 62rem;
        height: 61.625rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        position: relative;
        top: 8rem;
        width: 38rem;
        height: 46rem;
    }
    @media screen and (max-width: 48rem) {
        margin: 0 10rem;   
    }
    
    @media (width: 48rem) and (height: 64rem) {
        width: 32rem;
        height: 40rem;
        position: relative;
        top: 11rem;
        right: 2rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        position: relative;
        top: 0.5rem;
        right: 9.5rem;
        width: 47rem;
        height: 46.75rem;
    }
    @media screen and (max-width: 44rem) {
        margin: 0 7rem;   
    }
    @media screen and (max-width: 40rem) {
        margin: 0 4rem;   
    } 
    @media screen and (max-width: 36rem) {
        margin: 0 2.5rem;   
    }
    @media screen and (max-width: 34rem) {
        margin: 0 1.8rem;   
    }
    @media screen and (max-width: 34rem) {
        margin: 0 1.4rem;   
    }
    @media screen and (max-width: 26.563rem) {
        margin: 0 1.3rem;
        position: relative;
        top: 3rem;
        width: 25rem;
        height: 42rem;   
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        top: 0.4rem;
        width: 25.563;
        height: 46.75rem;
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        position: relative;
        top: 0.5rem;
        height: 46.5rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        top: 0.5rem;
        right: 0.9rem;
        height: 45rem;
    }
    @media screen and (max-width: 25.688rem) {
        width: 23.5rem;
        height: 38rem;
        margin: 0 1.6rem;
        position: relative;
        top: 3.5rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        top: 1rem;
        height: 49rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        top: 1.2rem;
        right: 0.6rem;
        height: 43.5rem;
    }
    @media screen and (max-width: 23.438rem) {
        width: 22rem;
        height: 42rem;
        margin: 0 1.3rem; 
        position: relative;
        top: 3rem; 
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 1rem;
        right: 0.6rem;
        height: 49rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        position: relative;
        top: 0.5rem;
        right: 0.8rem;
        width: 22.438rem;
        height: 46.75rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        position: relative;
        top: 1rem;
        right: 0.6rem;
        height: 45.5rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        top: 0.9rem;
        right: 0.6rem;
        height: 39.8rem;
    }
    @media screen and (max-width: 22.5rem) {
        width: 20.8rem;
        height: 38rem;
        position: relative;
        top: 1rem;  
    }
    @media screen and (max-width: 20rem) {
        margin: 0 0.9rem;
        position: relative;
        top: 3rem;
        width: 19.2rem;
        height: 42rem;   
    }
    @media (width: 20rem) and (height: 47.75rem) {
        top: 0.4rem;
        width: 19.2rem;
        height: 46.95rem;
    }
    @media (width: 20rem) and (height: 47.625rem) {
        position: relative;
        top: 0.5rem; 
        height: 46.8rem;   
    }
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        top: 0.5rem;
        height: 34.5rem;
    }
    
`

const StyledHowToPlay = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 43.75rem;
    height: 43.75rem;
    margin: 0 auto;
    position: relative;
    top: 7.8rem;
    right: 9.375rem;
    @media screen and (max-width: 90rem) {
        margin: 0 25rem;
        position: relative;
        top: 10rem;
    }
    @media screen and (max-width: 89rem) {
        margin: 0 24.5rem;
        width: 41.25rem;
        height: 41.25rem;
    }
    @media screen and (max-width: 87.5rem) {
        margin: 0 24rem;
        width: 38.75rem;
        height: 38.75rem;
    }
    @media screen and (max-width: 83.75rem) {
        margin: 0 25rem;
        width: 36.25rem;
        height: 36.25rem;
    }
    @media screen and (max-width: 80.625rem) {
        margin: 0 24rem;
        width: 33.75rem;
        height: 33.75rem;
    }
    @media screen and (max-width: 77.5rem) {
        margin: 0 22.5rem;
        width: 31.25rem;
        height: 31.25rem;
    }
    @media screen and (max-width: 74.375rem) {
        margin: 0 25rem;
        width: 28.75rem;
        height: 28.75rem;
    }
    @media screen and (max-width: 71.25rem) {
        margin: 0 24rem;
    }
    @media screen and (max-width: 68.125rem) {
        margin: 0 23rem;
    }
    @media screen and (max-width: 64rem) {
        position: relative;
        top: 1rem;
        right: -0.8rem;
        margin: 0 22.5rem;
        width: 28rem;
        height: 28rem;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        position: relative;
        top: 2.5rem;
        left: 0.2rem;
        width: 30rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        width: 50rem;
        height: 49.625rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        position: relative;
        top: 2.5rem;
        left: 0.2rem;
        width: 30rem;
    }
    @media screen and (max-width: 48rem) {
        margin: 0 20rem;
        width: 28.75rem;
        height: 28.75rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        top: -1rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        width: 38rem;
        height: 38.75rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        position: relative;
        top: -0.5rem;
    }
    @media screen and (max-width: 46.25rem) {
        margin: 0 15rem;
        width: 27.5rem;
        height: 27.5rem;
    }
    @media screen and (max-width: 43.125rem) {
        margin: 0 13.75rem;
        width: 26.25rem;
        height: 26.25rem;
    }
    @media screen and (max-width: 40rem) {
        margin: 0 12.5rem;
        width: 25rem;
        height: 25rem;
    }
    @media screen and (max-width: 26.563rem) {
        position: relative;
        top: 3rem;
        width: 22rem;
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        position: relative;
        top: 0.2rem;
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        position: relative;
        top: 0.5rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        top: 0.5rem;
    }
    @media screen and (max-width: 25.688rem) {
        position: relative;
        top: 1rem;
    }
    @media screen and (max-width: 23.438rem) {
        position: relative;
        top: 1rem;
        right: -0.2rem;
        width: 18rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 0.5rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        position: relative;
        top: -0.2rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        position: relative;
        top: -0.5rem
    }
    @media screen and (max-width: 22.5rem) {
        position: relative;
        top: -0.5rem;
    }
    @media screen and (max-width: 20rem) {
        width: 17rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {    
        position: relative;
        top: -0.2rem;
    }
`;

const HowToPlayTitle = styled.h1`
    font-family: 'Retro', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.8rem;
    text-align: center;
    @media screen and (max-width: 87.5rem) {
        font-size: 2.25rem;
    }
    @media screen and (max-width: 64rem) {
        position: relative;
        right: 0.4rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 3rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        right: 0.4rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        position: relative;
        right: 0.4rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        right: 0.5rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        right: 0.2rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 2rem;
    }
`;

const WhatTheGameIs = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2rem;
    position: relative;
    bottom: 1.5rem;
    font-weight: bolder;
    color: pink;
    text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
    @media screen and (max-width: 64rem) {
        font-size: 1rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 2rem;
    }
    @media screen and (max-width: 53.125rem) {
        font-size: 1rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 1.125rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        font-size: 1.35rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media screen and (max-width: 26.563rem) {
        font-size: 0.8rem;
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        font-size: 1.125rem;
        position: relative;
        right: 0.6rem;
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        font-size: 1.125rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        font-size: 1.125rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        font-size: 1.125rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1rem;
        position: relative;
        right: 0.6rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        font-size: 1rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        font-size: 1.05rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
        font-size: 1.05rem;
    }
    @media (width: 20rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 0.8rem;
    }
`

const UnorderedList = styled.ul`
    position: relative;
    right: 1.3rem;
    bottom: 3.5rem;
    @media screen and (max-width: 48rem) {
        position: relative;
        right: 1.5rem;
    }
`

const Text = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    font-weight: bolder;
    color: black;
    @media screen and (max-width: 64rem) {
        font-size: 0.875rem;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 1.125rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 1.8rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        font-size: 1.125rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 1.125rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        font-size: 1.35rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        font-size: 1.125rem;
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        font-size: 1.125rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        font-size: 1rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        font-size: 1.125rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        font-size: 1rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        font-size: 1.05rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
        font-size: 1rem;
    }
    @media (width: 20rem) and (height: 47.625rem) {
        font-size: 1rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 0.8rem;
    }
`

const ButtonLine = styled.div`
    display: flex;
    position: relative;
    bottom: 4.5rem;
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

const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.125rem;
    padding: 0.5rem;
    margin: 0.2rem;
    width: 8rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    top: 1rem;
    right: 0.4rem;
    @media screen and (max-width: 64rem) {
        font-size: 1.125rem;
        position: relative;
        right: 1rem;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 1.125rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 2rem;
        width: 15rem;
        border-radius: 0.5rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        font-size: 1.125rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 1.125rem;
        position: relative;
        top: 0.2rem;
        right: 1rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        font-size: 1.5rem;
        width: 10rem;
        border-radius: 0.5rem;
    }
    @media (width: 48rem) and (height: 47.625rem) {
        font-size: 1rem;
        position: relative;
        right: 0.8rem;
        top: 1rem;
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        position: relative;
        top: -1rem;
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        position: relative;
        top: -1rem;
        font-size: 1.125rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        font-size: 1.125rem;
        top: 1rem;
    }
    @media screen and (max-width: 25.688rem) {
        position: relative;
        top: 1rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        top: -0.5rem;
        right: 0.8rem;
        font-size: 1.125rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1.125rem;
    }
    @media screen and (max-width: 23.438rem) {
        position: relative;
        top: 0.5rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        font-size: 1rem;
        position: relative;
        right: 0.5rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        position: relative;
        top: -0.1rem;
        right: 0.9rem;
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        font-size: 1rem;
        width: 8rem;
        position: relative;
        top: -0.2rem;
        right: 0.4rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        right: 0.5rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {    
        position: relative;
        top: -0.1rem;
        right: 0.6rem;
    }
    @media (width: 20rem) and (height: 47.625rem) {
        font-size: 1rem;
        position: relative;
        top: 0.2rem;
        right: 0.4rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        right: 0.5rem;
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
            <HowToPlayBackground>
                <CardWrapper>
                    <StyledHowToPlay>
                        <HowToPlayTitle>
                            How To Play
                        </HowToPlayTitle>
                        <WhatTheGameIs>
                        Bingemasters is a single player trivia game where players guess the name of the actor that appears on screen.
                        </WhatTheGameIs>
                        <UnorderedList>
                            <li>
                                <Text>
                                    Players have 60 seconds to guess the actor in question. Depending on the difficulty, you will have either mulitple choice options to choose from or an input field to enter the actor's name.
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Correct answers are worth 1 point and spelling is of vital importance when typing in names. The slightest error will be punished mercilessly!
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    The goal of the game is to record the highest streak of correct answers and the highest streaks of all-time will be kept on the global leaderboard.
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    The game will end if your timer reaches zero or you select the wrong actor in multiple choice. But don't fret! You can just play again!
                                </Text>
                            </li>
                            </UnorderedList>
                        <ButtonLine>
                            <ReturnHomeButton 
                                type="submit"
                                onClick={this.handleClickReturn.bind(this)}
                                >Return Home      
                            </ReturnHomeButton>
                        </ButtonLine>
                    </StyledHowToPlay>
                </CardWrapper>
            </HowToPlayBackground>
        )} else {
            return <HomePage/> 
}}}

export default Instructions;