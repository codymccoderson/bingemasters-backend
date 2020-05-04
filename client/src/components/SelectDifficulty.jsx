import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import tv_static2 from '../tv_static2.jpg';
import HomePage from './HomePage';
import MultipleChoice from './MultipleChoice';
import FetchRandomMovieStar from './FetchRandomMovieStar';

const SelectDifficultyBackground = styled.div`
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
const StyledSelectDifficulty = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 12.5rem;
    height: 12.5rem;
    margin: 0 auto;
    position: relative;
    top: 8rem;
    right: 8.5rem;
    @media screen and (max-width: 86.25rem) {
        margin: 0 36.875rem;
    }
    @media screen and (max-width: 82.5rem) {
        margin: 0 34.5rem;
    }
    @media screen and (max-width: 73.75rem) {
        margin: 0 32rem;
    }
    @media screen and (max-width: 67.5rem) {
        margin: 0 28rem;
    }
    @media screen and (max-width: 64rem) {
        margin: 0 28.5rem;
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 12.5rem;
        height: 12.5rem;
        position: relative;
        top: 8rem;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        margin: 0 35rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        margin: 0 35rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        margin: 0 35rem;
    }
    @media (width: 56.813rem) and (height: 47.875rem) {
        position: relative;
        right: 6rem;   
    }
    @media (width: 56.813rem) and (height: 47.75rem) {
        margin: 0 31rem;
    }
    @media (width: 56rem) and (height: 47.75rem) {
        margin: 0 31rem;
    }
    @media screen and (max-width: 51rem) {
        margin: 0 28rem;
    }
    @media screen and (max-width: 48rem) {
        margin: 0 26.3rem;
    }
    @media screen and (max-width: 43.75rem) {
        margin: 0 24.5rem;
    }
    @media screen and (max-width: 42.188rem) {
        margin: 0 23rem;
    }
    @media screen and (max-width: 40.625rem) {
        margin: 0 21.5rem;
    }
    @media screen and (max-width: 39.063rem) {
        margin: 0 20rem;
    }
    @media screen and (max-width: 37.5rem) {
        margin: 0 19rem;
    }
    @media screen and (max-width: 35.938rem) {
        margin: 0 18rem;
    }
    @media screen and (max-width: 26.563rem) {
        margin: 0 15.5rem;
    }
    @media screen and (max-width: 26.563rem) {
        margin: 0 15.5rem;
    }
    @media screen and (max-width: 23.438rem) {
        margin: 0 14rem;
    }
    @media screen and (max-width: 20rem) {
        margin: 0 12.3rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        top: 5rem;
    }
`;

const SelectDifficultyTitle = styled.h1`
    color: black;
    font-family: 'Retro', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 5rem;
    @media screen and (max-width: 86.25rem) {
        font-size: 4.875rem;
    }
    @media screen and (max-width: 82.5rem) {
        font-size: 4.5rem;
    }
    @media screen and (max-width: 73.75rem) {
        font-size: 3.75rem;
    }
    @media screen and (max-width: 67.5rem) {
        font-size: 3.5rem;
    }
    
    @media screen and (max-width: 64rem) {
        font-size: 3.75rem;
    }
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 8rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 6rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        font-size: 6rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 6rem;
    }
    @media screen and (max-width: 40.625rem) {
        font-size: 3.25rem;
    }  
    @media screen and (max-width: 23.438rem) {
        font-size: 2.5rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        font-size: 3rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        right: 0.3rem;
    }
    @media screen and (max-width: 20rem) {
        font-size: 2.25rem;
    }   
`;

const ButtonLine = styled.div`
    display: flex;
    flex-flow: column;
    position: relative;
    bottom: 1.25rem;
    right: 0.5rem;
    @media (width: 64rem) and (height: 85.375rem) {
        position: relative;
        right: 1.5rem;
    }
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
    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        left: -0.5rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        left: -0.7rem;
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        left: -0.7rem;
    }
    @media screen and (max-width: 25rem) {
        position: relative;
        left: 0.5rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        left: -0.4rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        position: relative;
        left: -0.4rem;        
    }
    @media (width: 23.438rem) and (height: 47.625rem) {
        position: relative;
        left: 0.3rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        left: -0.5rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        left: -0.8rem;
    }
    
    @media screen and (max-width: 20rem) {
        position: relative;
        left: 0.2rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
        position: relative;
        left: -0.4rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        left: -0.5rem;
    }
`

const EasyButton = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
    padding: 0.625rem;
    margin: 1.25rem;
    width: 12rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 3rem;
        width: 27rem;
        border-radius: 0.8rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 2rem;
        width: 15rem;
        border-radius: 0.8rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        font-size: 1.5rem;
        width: 12rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 2rem;
        width: 18rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        font-size: 1.5rem;
        width: 12rem;        
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        font-size: 1.2rem;
        width: 10rem;        
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        font-size: 1.2rem;
        width: 10rem;    
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1.2rem;
        width: 10rem;
    }
    
    @media (width: 23.438rem) and (height: 47.75rem) {
        font-size: 1.2rem;
        width: 10rem;        
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        font-size: 1.2rem;
        width: 10rem;    
    }
    @media (width: 22.5rem) and (height: 40rem) {
        font-size: 1.125rem;
        width: 10rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
        font-size: 1rem;
        width: 8rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 1rem;
        width: 8rem;
    }
`;

const HardButton = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
    padding: 0.625rem;
    margin: 1.25rem;
    width: 12rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    left: 0.2rem;
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 3rem;
        width: 27rem;
        border-radius: 0.8rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 2rem;
        width: 15rem;
        border-radius: 0.8rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        font-size: 1.5rem;
        width: 12rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 2rem;
        width: 18rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        font-size: 1.5rem;
        width: 12rem;        
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        font-size: 1.2rem;
        width: 10rem;        
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        font-size: 1.2rem;
        width: 10rem;    
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1.2rem;
        width: 10rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        font-size: 1.2rem;
        width: 10rem;        
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        font-size: 1.2rem;
        width: 10rem;    
    }
    @media (width: 22.5rem) and (height: 40rem) {
        font-size: 1.125rem;
        width: 10rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
        font-size: 1rem;
        width: 8rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 1rem;
        width: 8rem;
    }
`;

const HomeButton = styled.button`
    background-color: black;
    color: pink;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.5rem;
    padding: 0.625rem;
    margin: 1.25rem;
    width: 12rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    left: 0.2rem;
    @media (width: 64rem) and (height: 85.375rem) {
        font-size: 3rem;
        width: 27rem;
        border-radius: 0.8rem;
    }
    @media (width: 64rem) and (height: 63.625rem) {
        font-size: 2rem;
        width: 15rem;
        border-radius: 0.8rem;
    }
    @media (width: 64rem) and (height: 63.5rem) {
        font-size: 1.5rem;
        width: 15rem;
        position: relative;
        right: 0.8rem;
    }
    @media (width: 48rem) and (height: 64rem) {
        font-size: 2rem;
        width: 18rem;
    }
    @media (width: 48rem) and (height: 47.75rem) {
        font-size: 1.5rem;
        width: 12rem;        
    }
    @media (width: 48rem) and (height: 47.625rem) {
        width: 10rem;
    }
    @media (width: 26.563rem) and (height: 47.75rem) {
        font-size: 1.2rem;
        width: 10rem;        
    }
    @media (width: 26.563rem) and (height: 47.625rem) {
        width: 8rem;
        position: relative;
        left: -0.5rem;
    }
    @media (width: 25.875rem) and (height: 46rem) {
        width: 12rem;
    }
    @media (width: 25.688rem) and (height: 51.438rem) {
        font-size: 1.2rem;
        width: 10rem;    
    }
    @media (width: 25.688rem) and (height: 45.688rem) {
        font-size: 1.2rem;
        width: 10rem;
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        width: 12rem;
    }
    @media (width: 23.438rem) and (height: 47.75rem) {
        font-size: 1.2rem;
        width: 10rem;        
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        font-size: 1.2rem;
        width: 10rem;    
    }
    @media (width: 22.5rem) and (height: 40rem) {
        font-size: 1.125rem;
        width: 10rem;
    }
    @media (width: 20rem) and (height: 47.75rem) {
        font-size: 1rem;
        width: 8rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        font-size: 1rem;
        width: 8rem;
    }
    
`;

class SelectDifficulty extends React.Component {

    state = {
        clickedEasy: false,
        clickedHard: false,
        clickedHome: false
    }

    handleClickEasy () {
        this.setState({
          clickedEasy: true,
          clickedHard: false,
          clickedHome: false
        })
      }

    handleClickHard () {
        this.setState({
            clickedEasy: false,
            clickedHard: true,
            clickedHome: false
        })
    }

    handleClickHome () {
        this.setState({
            clickedEasy: false,
            clickedHard: false,
            clickedHome: true
        })
    }

    render() {

        if (this.state.clickedEasy === false && this.state.clickedHard === false && this.state.clickedHome === false) {

        return(
            <SelectDifficultyBackground>
                <StyledSelectDifficulty>
                    <SelectDifficultyTitle>
                        Bingemasters
                    </SelectDifficultyTitle>
                    <ButtonLine>
                        <EasyButton 
                            type="submit"
                            onClick={this.handleClickEasy.bind(this)}
                            >Easy   
                        </EasyButton>
                        <HardButton
                            type="submit"
                            onClick={this.handleClickHard.bind(this)}
                            >Hard   
                        </HardButton>
                        <HomeButton
                            type="submit"
                            onClick={this.handleClickHome.bind(this)}
                            >Return Home
                        </HomeButton>
                    </ButtonLine>
                </StyledSelectDifficulty>
            </SelectDifficultyBackground>
        )} else if (this.state.clickedEasy === true && this.state.clickedHard === false && this.state.clickedHome === false) {
            return <MultipleChoice/>
    }      else if (this.state.clickedEasy === false && this.state.clickedHard === true && this.state.clickedHome === false) {
            return <FetchRandomMovieStar/>
    }      else if (this.state.clickedEasy === false && this.state.clickedHard === false && this.state.clickedHome === true) {
            return <HomePage/>
    }
}}

export default SelectDifficulty;