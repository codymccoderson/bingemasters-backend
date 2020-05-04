import React from 'react';
import GameOver from './GameOver';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import tv_static2 from '../tv_static2.jpg';
import getActorsPage from '../utils/getActorsPage';
import randomizer from '../utils/randomizer';
import HomePage from './HomePage';

const HTMLWrapper = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 82vw 95vh;
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
        height: 39rem;
        margin: 0 auto;
        position: relative;
        top: 3rem;
        right: 1rem;
        background-color: whitesmoke;
        border-radius: 0.875rem;
        box-sizing: border-box;
        border: solid 0.2rem black;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        width: 62rem;
        height: 83.375rem;
        position: relative;
        top: 0.8rem;
        right: 0.1rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        width: 62rem;
        height: 61.5rem;
        position: relative;
        top: 0.9rem;
        right: -0.1rem;    
    }
    @media screen and (max-width: 48rem) {
        margin: 0 14rem;
        width: 22rem;
        height: 42rem;   
    }
    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        top: 1rem;
        right: 13rem;
        width: 46rem;
        height: 62rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        position: relative;
        top: 0.5rem;
        right: 13.5rem;
        width: 47rem;
        height: 46.75rem;
    }
    @media screen and (max-width: 44rem) {
        margin: 0 11rem;   
    }  
    @media screen and (max-width: 40rem) {
        margin: 0 8rem;   
    }
    @media screen and (max-width: 36rem) {
        margin: 0 5rem;   
    }
    @media screen and (max-width: 34rem) {
        margin: 0 4rem;   
    } 
    @media screen and (max-width: 26.563rem) {
        margin: 0 3.2rem;
        position: relative;
        top: 3rem;  
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        position: relative;
        top: 0.3rem;
        right: 2.85rem;
        width: 25.963rem;
        height: 47.15rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        top: 0.5rem;
        right: 2.7rem;
        width: 24.875rem;
        height: 45rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        top: 0.3rem;
        right: 2.7rem;
        width: 24.688rem;
        height: 50.438rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        top: 0.5rem;
        right: 2.7rem;
        width: 24.688rem;
        height: 44.688rem; 
    }
    @media screen and (max-width: 23.438rem) {
        margin: 0 2.7rem;
        width: 20rem;  
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 0.5rem;
        right: 2.2rem;
        width: 22.438rem;
        height: 49.75rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        position: relative;
        top: 0.35rem;
        right: 2.35rem;
        width: 22.838rem;
        height: 47.15rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        top: 0.5rem;
        right: 2.2rem;
        width: 22.438rem;
        height: 40.688rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        top: 0.4rem;
        right: 2rem;
        width: 20.9rem;
        height: 39rem;
    }
    @media screen and (max-width: 20rem) {
        margin: 0 1.5rem;
        position: relative;
        top: 3rem;
        width: 19.2rem;
        height: 39rem;   
    }  
    @media (width: 20rem) and (height: 47.75rem) {
        position: relative;
        top: 0.3rem;
        right: 1.2rem;
        width: 19.4rem;
        height: 47.15rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        top: 0.2rem;
        right: 1.2rem;
        width: 19.4rem;
        height: 34.9rem;
    }
    
`

const AppWrapper = styled.div`
    
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 12.5rem;
    height: 12.5rem;
    margin: 0 auto;
    position: relative;
    top: 6rem;
    right: 9.375rem;
    @media screen and (max-width: 90rem) {
        position: relative;
        top: 8rem;
    }
    @media screen and (max-width: 71.875rem) {
        margin: 0 30.313rem;    
    }
    @media screen and (max-width: 64rem) {
        margin: 0 28.5rem;
        position: relative;
        right: 0.1rem;
        top: -1.8rem;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        top: 1.5rem;
    }
    @media screen and (max-width: 50rem) {
        margin: 0 25.5rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        position: relative;
        top: -2rem;    
    }
    @media screen and (max-width: 46.875rem) {
        margin: 0 24rem;
    }
    @media screen and (max-width: 43.750rem) {
        margin: 0 23.5rem;
    }
    @media screen and (max-width: 42.188rem) {
        margin: 0 23rem;
    }
    @media screen and (max-width: 40.625rem) {
        margin: 0 22rem;
    }
    @media screen and (max-width: 39.063rem) {
        margin: 0 21rem;
    }
    @media screen and (max-width: 37.5rem) {
        margin: 0 19.5rem;
    }
    @media screen and (max-width: 35.938rem) {
        margin: 0 18.5rem;
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        position: relative;
        top: 1.5rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        top: 1.5rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        top: 1rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 2rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        position: relative;
        top: 1.5rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        top: 0.5rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        top: -0.2rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
       position: relative;
       top: 2.4rem;
    } 
`

const MainTitle = styled.h1`
    font-size: 2.2rem;
    font-family: 'Retro', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media screen and (max-width: 64rem) {
        font-size: 2.5rem;
        font-weight: bolder;
        color: pink;
        text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 7rem;
        position: relative;
        left: 0.5rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 6rem;
        position: relative;
        left: 0.5rem;     
    }
    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        left: 0.4rem;
        font-size: 5rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        font-size: 4.5rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        font-size: 3rem;
        position: relative;
        left: 0.2rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        font-size: 3rem;
        position: relative;
        left: 0.2rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 3rem;
        position: relative;
        left: 0.2rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        font-size: 2.5rem;
        position: relative;
        left: 0.2rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
        position: relative;
        left: 0.2rem;
        font-size: 2.2rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 2.25rem;
        position: relative;
        left: 0.2rem;
    }
`

const ImageAndHintsWrapper = styled.div`
    position: relative;
    bottom: 1rem;
    @media (width: 64rem) and (height: 63.625rem) {
        position: relative;
        bottom: 4rem;     
    }
    @media (width: 48rem) and (height: 47.75rem) {
        position: relative;
        bottom: 3rem;
    }
    .hint {
        font-size: 1rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        position: relative;
        left: 0.5rem;
        bottom: 1rem;
        @media screen and (max-width: 64rem) {
            font-weight: bolder;
            color: pink;
            text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
        }
        @media (width: 64rem) and (height: 85.375rem) {
            font-size: 1.5rem;
        }
        @media (width: 64rem) and (height: 63.625rem) {
            font-size: 1.125rem;     
        }
        @media (width: 48rem) and (height: 64rem) {
            font-size: 1.5rem;
        }
        @media (width: 23.438rem) and (height: 50.75rem) {
            font-size: 1.125rem;
        }
        @media (width: 22.5rem) and (height: 40rem) {
            font-size: 0.875rem;
        }
        @media (width: 20rem) and (height: 35.5rem) {
            font-size: 0.8rem;
            position: relative;
            left: 0.2rem;
        }
    }
`

const ImageWrapper = styled.div`
    .theActorImg {
        border-radius: 0.625rem;
        box-sizing: border-box;
        border: solid 0.5rem pink;
        @media screen and (max-width: 64rem) {
            border: solid 0.5rem black;
        }
        @media (width: 64rem) and (height: 85.375rem) {
            width: 25rem;
            height: 25rem;
        }
        @media (width: 64rem) and (height: 63.625rem) {
            width: 23rem;
            height: 23rem;    
        }
        @media (width: 48rem) and (height: 64rem) {
            width: 21.875rem;
            height: 21.875rem;
        }
        @media (width: 48rem) and (height: 47.75rem) {
            width: 19rem;
            height: 19rem;
        }  
        @media (width: 25.875rem) and (height: 46rem) {
            width: 18rem;
            height: 18rem;
        }
        @media (width: 25.688rem) and (height: 51.438rem) {
            width: 18rem;
            height: 18rem;
        }   
    }   
`
const FormWrapper = styled.div`
    position: relative;
    bottom: 2.5rem;
`
const TheActualForm = styled.form`
    
    .userInput {
        font-size: 0.875rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border-radius: 0.25rem;
        box-sizing: border-box;
        border: solid 0.188rem black;
        margin-bottom: 0.5rem;
        position: relative;
        left: 1.625rem;
        @media (width: 64rem) and (height: 85.375rem) {
            width: 20rem;
            height: 2rem;
            position: relative;
            left: -0.1rem;
        } 
        @media (width: 64rem) and (height: 63.625rem) {
            width: 18rem;
            height: 2rem;
            position: relative;
            left: -0.1rem;
            bottom: 2.5rem;    
        }
        @media (width: 48rem) and (height: 64rem) {
            width: 18rem;
            height: 2rem;
            position: relative;
            left: -0.1rem;
        }
        @media (width: 48rem) and (height: 47.75rem) {
            width: 16rem;
            height: 2rem;
            position: relative;
            left: -0.1rem;
            bottom: 2rem;    
        }
        @media (width: 26.563rem) and (height: 47.75rem) {
            width: 14rem;
            height: 2rem;
            position: relative;
            left: -0.1rem;
        }
        @media (width: 25.875rem) and (height: 46rem) {
            width: 14rem;
            height: 2rem;
            position: relative;
            left: -0.2rem;
        }
        
        @media (width: 25.688rem) and (height: 51.438rem) {
            width: 12rem;
            height: 2rem;
            position: relative;
            left: 0.2rem;      
        }
        @media (width: 25.688rem) and (height: 45.688rem) {
            width: 12rem;
            position: relative;
            left: 0.3rem;
        }
        @media (width: 23.438rem) and (height: 50.75rem) {
            width: 14rem;
            height: 2rem;
            position: relative;
            left: -0.1rem;
        }
        @media (width: 23.438rem) and (height: 47.75rem) {
            width: 14rem;
            height: 2rem;
            position: relative;
            left: -0.1rem;
        }
        @media (width: 23.438rem) and (height: 41.688rem) {
            width: 12rem;
            position: relative;
            left: 0.4rem;
        }
        @media (width: 20rem) and (height: 47.75rem) {
            width: 12rem;
            height: 2rem;
            position: relative;
            left: 0.4rem;
        }
    }
    .userSubmitButton {
        background-color: pink;
        font-size: 0.875rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
        :hover {color: white};
        transition: color .1s;
        border-radius: 0.25rem;
        box-sizing: border-box;
        border: solid 0.188rem black;
        position: relative;
        left: 3.25rem;
        @media (width: 64rem) and (height: 85.375rem) {
            position: relative;
            left: 3.5rem;
            font-size: 2rem;
        }
        @media (width: 64rem) and (height: 63.625rem) {
            position: relative;
            left: 3rem;
            bottom: 2rem;
            font-size: 1.8rem;
        }
        @media (width: 48rem) and (height: 64rem) {
            position: relative;
            left: 3.8rem;
            font-size: 1.5rem;
        }
    
        @media (width: 48rem) and (height: 47.75rem) {
            position: relative;
            left: 3rem;
            bottom: 1.5rem;
            font-size: 1.5rem;
        }  
        @media (width: 26.563rem) and (height: 47.75rem) {
            position: relative;
            left: 2.7rem;
            font-size: 1.2rem;    
        }
        @media (width: 25.875rem) and (height: 46rem) {
            position: relative;
            left: 2.8rem;
            font-size: 1.125rem;
        }
        @media (width: 25.688rem) and (height: 51.438rem) {
            position: relative;
            left: 2.4rem;
            font-size: 1.125rem;    
        }
        @media (width: 25.688rem) and (height: 45.688rem) {
            position: relative;
            left: 2.7rem;
            font-size: 1rem;
        }
        @media (width: 23.438rem) and (height: 50.75rem) {
            position: relative;
            left: 2.7rem;
            font-size: 1.2rem;
        }
        @media (width: 23.438rem) and (height: 47.75rem) {
            position: relative;
            left: 2.7rem;
            font-size: 1.2rem;
        }
        @media (width: 23.438rem) and (height: 41.688rem) {
            position: relative;
            left: 2.7rem;
            font-size: 1rem;
        }
        @media (width: 20rem) and (height: 47.75rem) {
            position: relative;
            left: 2.7rem;
            font-size: 1rem;
        }
    }
`
const TimeAndScoreWrapper = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    position: relative;
    bottom: 3rem;
    @media screen and (max-width: 64rem) {
        position: relative;
        bottom: 2rem;    
    }
    @media (width: 64rem) and (height: 85.375rem) {
        position: relative;
        bottom: 2rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        bottom: 4rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        position: relative;
        bottom: 4rem;
    }  
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        bottom: 2.5rem;
        right: 0.3rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        bottom: 3.25rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        bottom: 3rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        bottom: 3rem;
    }
    .time {
        font-size: 1rem;
        @media screen and (max-width: 64rem) {
            font-size: 1.5rem    
        }
        @media (width: 64rem) and (height: 85.375rem) {
            font-size: 2rem;
        }
        @media (width: 64rem) and (height: 63.625rem) {
            font-size: 1.8rem;
        }
        
    }
    h3 {
        font-size: 1rem;
        position: relative;
        bottom: 0.75rem;
        @media screen and (max-width: 64rem) {
            font-size: 1.5rem;
            font-weight: bolder;
            color: pink;
            text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
        }
        @media (width: 64rem) and (height: 85.375rem) {
            font-size: 2.5rem;
        }
        @media (width: 64rem) and (height: 63.625rem) {
            font-size: 1.8rem;
        }
        @media (width: 48rem) and (height: 64rem) {
            font-size: 1.8rem;
        }
        @media (width: 48rem) and (height: 47.75rem) {
            position: relative;
            bottom: 1rem;
        }
        @media (width: 25.875rem) and (height: 46rem) {
            position: relative;
            bottom: 1rem;
            right: 0.2rem;
        }
        @media (width: 23.438rem) and (height: 41.688rem) {
            position: relative;
            bottom: 1rem;
        }
        @media (width: 22.5rem) and (height: 40rem) {
            position: relative;
            bottom: 1rem;
        }
        @media (width: 20rem) and (height: 35.5rem) {
            position: relative;
            bottom: 1.3rem;
        }
    }
`

const ButtonLine2 = styled.div`
    display: flex;
    position: relative;
    left: 1rem;
    bottom: 4rem;
    @media (width: 64rem) and (height: 63.625rem) {
        bottom: 4.8rem;
    }
    @media screen and (max-width: 48rem) {
        position: relative;
        bottom: 3rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        position: relative;
        bottom: 6rem;    
    }
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        left: 0.6rem;
        bottom: 4.1rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        bottom: 4.5rem;
    }
`
const QuitButton = styled.button`
    background-color: black;
    :hover {color: white};
    transition: color .1s;
    font-size: 1.2rem;
    font-weight: bolder;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: pink;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    margin-right: 2.3rem;
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 2.5rem;
        width: 18rem;
        border-radius: 0.8rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 2.5rem;
        width: 18rem;
        border-radius: 0.8rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 2rem;
        width: 16rem;
        border-radius: 0.8rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        font-size: 1.8rem;
        width: 14rem;
        border-radius: 0.8rem;    
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        font-size: 1.5rem;
        width: 12rem;
        border-radius: 0.5rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        font-size: 1.5rem;  
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        font-size: 1.8rem;
        width: 14rem;
        border-radius: 0.8rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1.8rem;
        width: 14rem;
        border-radius: 0.8rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        font-size: 1.8rem;
        width: 14rem;
        border-radius: 0.8rem;    
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        font-size: 1.5rem;
        width: 12rem;
        border-radius: 0.5rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        font-size: 1.5rem;
        position: relative;
        bottom: 1.5rem;
    }
    
    @media (width: 22.5rem) and (height: 40rem) {
        font-size: 1.5rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
        font-size: 1.5rem;
        width: 12rem;
        border-radius: 0.5rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 1.2rem;
        position: relative;
        bottom: 2.2rem;
    }
`

class FetchRandomMovieStar extends React.Component {

    state = {

        loading: true,
        randomPage: null,
        actorSelector: null,
        profilePath: "",
        userGuessInput: "",
        actorName: "",
        movieName: "",
        secondMovieName: "",
        count: 10000,
        resetTimer: false,
        currentScore: 0,
        gameOver: false,
        clickHome: false

    };

    componentDidMount() {
        this.setRandomPage();
        this.doIntervalChange();
    }

    async setRandomPage() {
        
        let actors = await getActorsPage();
        let correctActor = await actors[randomizer(1,19)]

          while (
            !correctActor.known_for ||
            correctActor.known_for.length <= 2 ||
            !correctActor.profile_path ||
            correctActor.popularity <= 7 ||
            correctActor.adult === "true" ||
            correctActor.name === "R. Sarathkumar" ||
            correctActor.name === "Peyton List" ||
            correctActor.name === "Temuera Morrison" ||
            correctActor.name === "Gal Gadot" ||
            correctActor.name === "Eloise Smyth" ||
            correctActor.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === "Eiza Gonzalez" ||
            correctActor.name === "Aubrey Plaza" ||
            correctActor.name === "Kathleen Robertson" ||
            correctActor.name === "Yoon Se-na" ||
            correctActor.name === "Geraldine Chaplin" ||
            correctActor.name === "Alice Pagani" ||
            correctActor.name === "Dylan O'Brien" ||
            correctActor.name === "Clara Lago" ||
            correctActor.name === "Colin Farrell" ||
            correctActor.known_for_department !== "Acting"
          ) {
            let actors = await getActorsPage();  
            correctActor = await actors[randomizer(1,19)];
          }

        const randomActorPhotoPath = await correctActor.profile_path;
        const randomActorName = await correctActor.name;
        const noAccentName = await randomActorName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const movieTheyWereIn = await correctActor.known_for[0].title;
        const secondMovieTheyWereIn = await correctActor.known_for[1].title;

        this.setState({
          loading: false,
          randomPage: correctActor,
          profilePath: randomActorPhotoPath,
          userGuessInput: "",
          actorName: noAccentName,
          movieName: movieTheyWereIn,
          secondMovieName: secondMovieTheyWereIn,
        });
        console.log(randomActorName);
        console.log(noAccentName);
      }
    

    handleChange = event => {
        this.setState({
            userGuessInput: event.target.value
            })
        }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { userGuessInput, actorName } = this.state;
        let { currentScore } = this.state;
        const submittedAnswer = userGuessInput;

        if (submittedAnswer === actorName) {
           this.setRandomPage();
           const newScore = (currentScore += 1);
           this.setState({
            userGuessInput: "",
            count: 60,
            currentScore: newScore
        }) 
        } else {
            this.setState({
                userGuessInput: ""
            })
            alert('WRONG');
        }

    }

    handleClickHome = (event) => {
        event.preventDefault();
        this.setState({
            clickHome: true
        })
    }

    resetClock () {
        clearInterval(this.myInterval)
        this.setState({
            count: 60
        })
    }

    doIntervalChange = () => {
        this.myInterval = setInterval(() => {
          if (this.state.count > 0)
        this.setState(prevState => ({
          count: prevState.count - 1
        }))
      }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
      }

    render() {
        const imageURL = `https://image.tmdb.org/t/p/w235_and_h235_bestv2${this.state.profilePath}`;
        const { count } = this.state;
        const { currentScore } = this.state;
        
        if (this.state.count >= 1 && this.state.clickHome === false) {

        return(
            <HTMLWrapper>
                <CardWrapper>
                    <AppWrapper>
                        <MainTitle>
                            Bingemasters
                        </MainTitle>
                        {this.state.loading || !this.state.profilePath ? (
                        <div>loading...</div> 
                        ) : (
                        <ImageAndHintsWrapper>
                            <ImageWrapper>
                                <img className="theActorImg" src={imageURL} alt="this... is a random actor"/>
                            </ImageWrapper>
                            {this.state.movieName === undefined || this.state.secondMovieName === undefined ? (
                            <p className="hint">You're probably not gonna know who I am.</p>
                            ) : (
                            <p className="hint">Hint: I was in {this.state.movieName} and {this.state.secondMovieName}.</p>)}
                        </ImageAndHintsWrapper>
                        )}
                        <FormWrapper>
                            <TheActualForm onSubmit={this.handleSubmit}>
                                <input className="userInput" 
                                type="text"
                                placeholder="Name this actor."
                                onChange={this.handleChange}
                                value={this.state.userGuessInput}
                                required
                                />
                                <button className="userSubmitButton"type="submit"
                                >Final Answer?
                                </button>
                            </TheActualForm>
                        </FormWrapper>
                        <TimeAndScoreWrapper>
                            <h2 className="time">Time left: {count}</h2>
                            {this.state.currentScore ? (
                            <h3 className="score">Streak: {currentScore}</h3>
                            ) : (
                            <h3 onSubmit={this.handleSubmit}>Streak: {currentScore}</h3>
                            )}    
                        </TimeAndScoreWrapper>
                        <ButtonLine2>
                            <QuitButton
                            type="submit"
                            onClick={this.handleClickHome}
                            >Quit Game
                            </QuitButton>
                        </ButtonLine2>
                    </AppWrapper>
                </CardWrapper>
            </HTMLWrapper>
        )} else if (this.state.clickHome === true) {
            return <HomePage/>
        }    else {
            return <GameOver/>
        }
    }
};

export default FetchRandomMovieStar;