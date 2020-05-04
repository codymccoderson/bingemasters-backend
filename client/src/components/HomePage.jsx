import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import Instructions from './Instructions';
import Leaderboard from './Leaderboard';
import tv_static2 from '../tv_static2.jpg';
import { connect } from 'react-redux';
import Modal from './Modal';
import SelectDifficulty from './SelectDifficulty';
import silhouette from '../silhouette.jpg';
import PostScore from './PostScore';


const StartGameBackground = styled.div`
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
const StyledStartGame = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 12.5rem;
    height: 12.5rem;
    margin: 0 auto;
    position: relative;
    top: 3rem;
    right: 9rem;

    @media screen and (max-width: 90rem) {
        margin: 0 39.5rem;

    }

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
        margin: 0 30rem;
    }

    @media screen and (max-width: 64rem) {
        margin: 0 35rem;
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 12.5rem;
        height: 12.5rem;
        position: relative;
    }

    @media screen and (max-width: 60rem) {
        margin: 0 32rem;
    }

    @media screen and (max-width: 51rem) {
        margin: 0 28rem;
    }

    @media screen and (max-width: 48rem) {
        margin: 0 27rem;
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
        margin: 0 16.5rem;
    }

    @media screen and (max-width: 25.875rem) {
        margin: 0 16.1rem;
    }

    @media screen and (max-width: 23.438rem) {
        margin: 0 15.7rem;
    }

    @media screen and (max-width: 20rem) {
        margin: 0 14.3rem;
    }

    @media screen and (max-height: 35.5rem) {
        position: relative;
        top: 4rem;
    }
`;

const StartGameTitle = styled.h1`
    color: black;
    font-family: 'Retro', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 4.5rem;

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
        font-size: 4.5rem;
        font-weight: bolder;
        color: pink;
        text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
    }

    @media screen and (max-width: 60rem) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 40.625rem) {
        font-size: 3.25rem;
    }

    @media screen and (max-width: 26.563rem) {
        font-size: 2.5rem;
        position: relative;
        right: 0.35rem;
    }

    @media screen and (max-width: 25.688rem) {
        position: relative;
        right: 0.2rem;
    }

    @media screen and (max-width: 23.438rem) {
        position: relative;
        right: 1rem;
    }

    @media screen and (max-width: 22.5rem) {
        position: relative;
        right: 1.5rem;
    }

    @media screen and (max-width: 20rem) {
        font-size: 2.25rem;
    }    
    `;

const ImageWrapper = styled.div`

    position: relative;
    bottom: 2rem;
    right: 0.2rem;

    @media screen and (max-width: 64rem) {
        position: relative;
        bottom: 1rem;
    }

    @media screen and (max-width: 26.563rem) {
        position: relative;
        right: 0.5rem;
    }

    @media screen and (max-width: 23.438rem) {
        position: relative;
        right: 1.3rem;
    }

    @media screen and (max-width: 22.5rem) {
        position: relative;
        right: 1.7rem;
    }

    .theActorImg {
        border-radius: 0.625rem;
        box-sizing: border-box;
        border: solid 0.5rem pink;
        width: 14rem;
        height: 14rem;
        position: relative;
        bottom: 0.75rem;

        @media screen and (max-width: 64rem) {
            border: solid 0.5rem black;
            width: 16rem;
            height: 16rem;
        }

        @media screen and (max-width: 60rem) {
            width: 14.688rem;
            height: 14.688rem;
        }
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

const StartGameButton = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    position: relative;
    bottom: 2.5rem;
    font-family: 'Gill Sans MT', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 0.5rem;
    margin-right: 1rem;
    width: 7rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    

    @media screen and (max-width: 64rem) {
        font-size: 1.5rem;
        width: 10rem;
    }

    @media screen and (max-width: 48rem) {
        font-size: 1rem;
        width: 7rem;
    }

    @media screen and (max-width: 26.563rem) {
        font-size: 0.875rem;
        width: 6rem;
        position: relative;
        right: -0.8rem;
    }
    
    @media screen and (max-width: 23.438rem) {
        position: relative;
        right: -1rem;
    }

    @media screen and (max-width: 22.5rem) {
        position: relative;
        right: -1.25rem;
    }

    @media screen and (max-width: 20rem) {
        position: relative;
        right: -1.5rem;
    }  

`;

const HowToPlayButton = styled.button`
    background-color: pink;
    :hover {color: white};
    transition: color .1s;
    color: black;
    position: relative;
    bottom: 2.5rem;
    font-family: 'Gill Sans MT', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 0.5rem;
    margin-right: 1rem;
    width: 7rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;

    @media screen and (max-width: 64rem) {
        font-size: 1.5rem;
        width: 10rem;
        position: relative;
        right: 0.6rem;
    }

    @media screen and (max-width: 48rem) {
        font-size: 1rem;
        width: 7rem;
    }

    @media screen and (max-width: 26.563rem) {
        position: relative;
        right: 1.1rem;
        font-size: 0.875rem;
        width: 6rem;
    }
    
    @media screen and (max-width: 23.438rem) {
        position: relative;
        right: 1.9rem;
    }

    @media screen and (max-width: 20rem) {
        position: relative;
        right: 1.8rem;
    }  

`;

const LeaderboardButton = styled.button`
    background-color: pink;
    color: black;
    position: relative;
    bottom: 2.5rem;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans MT', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 0.5rem;
    margin-right: 1rem;
    width: 7rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;

    @media screen and (max-width: 64rem) {
        font-size: 1.5rem;
        width: 10rem;
    }

    @media screen and (max-width: 48rem) {
        font-size: 1rem;
        width: 7rem;
        position: relative;
        right: 1.8rem;
    }

    @media screen and (max-width: 26.563rem) {
        position: relative;
        right: 3rem;
        font-size: 0.875rem;
        width: 6rem;
    }

    @media screen and (max-width: 23.438rem) {
        position: relative;
        right: 4.8rem;
    }

    @media screen and (max-width: 22.5rem) {
        position: relative;
        right: 5rem;
    }

    @media screen and (max-width: 20rem) {
        position: relative;
        right: 5.1rem;
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

    renderContent1() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <button type='submit' onClick= {() => {window.open("/auth/google")}} style={{
                    backgroundColor: 'black',
                    color: 'pink',
                    // 'a:hover': {color: 'white'},
                    // transition: {color: '.1s'},
                    fontFamily: 'Gill Sans', 'Gill Sans MT': 'Calibri', 'TrebuchetMS': 'sansSerif',
                    fontSize: '1rem',
                    padding: '0.625rem',
                    margin: '0.5rem',
                    height: '3rem',
                    width: '10rem',
                    borderRadius: '0.5rem',
                    boxSizing: 'border-box',
                    border: 'solid', '0.188rem': 'black',
                    position: 'relative',
                    bottom: '2.5rem'
                }}
                    >Login with Google</button>
            default: 
                return <button type='submit' onClick= {() => {window.open("/api/logout")}} style={{
                    backgroundColor: 'black',
                    color: 'pink',
                    // 'a:hover': {color: 'white'},
                    // transition: {color: '.1s'},
                    fontFamily: 'Gill Sans', 'Gill Sans MT': 'Calibri', 'TrebuchetMS': 'sansSerif',
                    fontSize: '1rem',
                    padding: '0.625rem',
                    margin: '0.5rem',
                    height: '3rem',
                    width: '10rem',
                    borderRadius: '0.5rem',
                    boxSizing: 'border-box',
                    border: 'solid', '0.188rem': 'black',
                    position: 'relative',
                    bottom: '2.5rem'
                }}
                >Logout</button>
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
                    <ImageWrapper>
                        <img className="theActorImg" src={silhouette} alt="this... is a random actor"/>
                    </ImageWrapper>
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
                        <LeaderboardButton
                        type="submit"
                        onClick={this.handleClickLeaderboard.bind(this)}
                        >Leaderboard
                        </LeaderboardButton>
                
                        {this.renderContent1()}
                        
                    </ButtonLine>
                </StyledStartGame>
            </StartGameBackground>
            

        )} else if (this.state.clickedGame === true && this.state.clickedHowTo === false && this.state.clickedLeaderboard === false) {
            return <SelectDifficulty/>
    }      else if (this.state.clickedGame === false && this.state.clickedHowTo === true && this.state.clickedLeaderboard === false) {
            return <Instructions/>
    }      else if (this.state.clickedGame === false && this.state.clickedHowTo === false && this.state.clickedLeaderboard === true) {
            // Change back to Leaderboard
            return <PostScore/>
    }
}}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(HomePage);