import React, { Component } from 'react';
import Modal from '../components/Modal';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import ReactModal from 'react-modal';
import './PostScore.css';
import tv_static2 from '../tv_static2.jpg';
import HomePage from '../components/HomePage';
import { useHistory } from 'react-router-dom';

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

    @media screen and (max-width: 53.125rem) {
        font-size: 1rem;
    }

    @media (width: 48rem) and (height: 64rem) {
        font-size: 1.125rem;
    }

    @media (width: 48rem) and (height: 47.625rem) {
        font-size: 1rem;
    }

    @media screen and (max-width: 26.563rem) {
        font-size: 0.8rem;
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

    @media (width: 23.438rem) and (height: 47.625rem) {
        font-size: 1rem;
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

    @media (width: 64rem) and (height: 63.5rem) {
        font-size: 1.125rem;
    }

    @media (width: 48rem) and (height: 64rem) {
        font-size: 1.125rem;
    }

    @media (width: 48rem) and (height: 47.625rem) {
        font-size: 1rem;
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

    @media (width: 23.438rem) and (height: 47.625rem) {
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

class PostScore extends Component {
    state = {
        showModal: false,
        clickHome: false
    };

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleOpenModal () {
        this.setState({ showModal: true });
      }    

handleSubmit = (event) => {
    // Remove this and pop up score submitted modal screen?
    event.preventDefault();
    //(event.target)
    const data = {name: this.state.name, score: this.props.currentScore}
    
    fetch('http://localhost:5000/api/scores/post', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
        body: JSON.stringify(data),

        //implement an auto redirect to home screen after letting them know (not through alert) score entry was submitted
    });
    alert('Score Submitted!')
}

render() {
    return (
        <HowToPlayBackground>
                <CardWrapper>
                    <StyledHowToPlay>
                        <HowToPlayTitle>
                            Congratulations, You made it to the Leaderboard!
                        </HowToPlayTitle>
                        <WhatTheGameIs>
                        Submit your score below
                        </WhatTheGameIs>
                        <UnorderedList>
                            
                        <div>
                       
                        <form onSubmit={this.handleSubmit.bind(this)} >
                         <Text>
                        <input  
                            type="text"
                            placeholder="Enter your name"
                            value={this.state.name}
                            required
                            maxLength="3"
                            onChange={this.onChangeName.bind(this)}
                        />
                        </Text>
                        <Text>
                        <p>Streak: {this.props.currentScore}</p>
                        </Text>
                        
                        <input 
                            type="submit"
                            value="Submit"
                            onClick= {() => {window.open("/","_self")}}
                        />
                        </form>
                        <Modal/>
                        </div>
                            </UnorderedList>
                        <ButtonLine>
                         
                        </ButtonLine>
                    </StyledHowToPlay>
                </CardWrapper>
            </HowToPlayBackground>
    )
    } }

export default PostScore;