import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import tv_static2 from '../tv_static2.jpg';
import axios from 'axios';
import PostScore from './PostScore';
import { connect } from 'react-redux';

const LeaderboardBackground = styled.div`
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
        height: 34rem;
        margin: 0 auto;
        position: relative;
        top: 8rem;
        background-color: whitesmoke;
        border-radius: 0.875rem;
        box-sizing: border-box;
        border: solid 0.2rem black;
    }

    @media (width: 64rem) and (height: 85.375rem) {
        position: relative;
        top: 15rem;
        width: 34rem;
        height: 38rem;
    }

    @media screen and (max-width: 48rem) {
        position: relative;
        top: 5rem;
        margin: 0 8rem;
        height: 32rem;   
    } 

    @media (width: 48rem) and (height: 64rem) {
        position: relative;
        top: 14rem;
        left: 0.5rem;
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
        margin: 0 0.6rem;   
    }

    @media screen and (max-width: 26.563rem) {
        margin: 0 0.8rem;
        position: relative;
        top: 8rem;
        width: 25rem;
        height: 30rem;   
    }

    @media (width: 25.875rem) and (height: 46rem) {
        position: relative;
        top: 7.5rem;
        right: 0.35rem;
    }

    @media (width: 25.688rem) and (height: 51.438rem) {
        position: relative;
        top: 9.5rem;
        right: 0.5rem;
    }

    @media (width: 25.688rem) and (height: 45.688rem) {
        position: relative;
        top: 7.5rem;
        right: 0.5rem;
    }

    @media screen and (max-width: 23.438rem) {
        width: 20.5rem;
        margin: 0 1.4rem;  
    }

    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        top: 5rem;
    }

    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 10rem;
    }

    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        top: 5rem;
        right: 0.4rem;

    }

    @media screen and (max-width: 20rem) {
        margin: 0 1.4rem;
        position: relative;
        top: 8rem;
        width: 17rem; 
    } 
    
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        top: 2.5rem;
    }
`

const StyledLeaderboard = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 43.75rem;
    height: 43.75rem;
    margin: 0 auto;
    position: relative;
    top: 9rem;
    right: 10rem;

    @media screen and (max-width: 90rem) {
        margin: 0 24.375rem;
        position: relative;
        right: 10rem;
        width: 43.75rem;
        height: 43.75rem;

    }

    @media screen and (max-width: 87.5rem) {
        margin: 0 23.75rem;
        width: 41.25rem;
        height: 41.25rem;

    }
    @media screen and (max-width: 86.875rem) {
        margin: 0 23.125rem;
        width: 38.75rem;
        height: 38.75rem;
    }

    @media screen and (max-width: 83.75rem) {
        width: 36.25rem;
        height: 36.25rem;
    }

    @media screen and (max-width: 80.625rem) {
        margin: 0 22.5rem;
        width: 33.75rem;
        height: 33.75rem;
    }

    @media screen and (max-width: 77.5rem) {
        width: 31.25rem;
        height: 31.25rem;
    }

    @media screen and (max-width: 74.375rem) {
        width: 28.75rem;
        height: 28.75rem;
    }

    @media screen and (max-width: 71.25rem) {
        width: 26.25rem;
        height: 26.25rem;
    }

    @media screen and (max-width: 68.125rem) {
        margin: 0 23rem;
    }

    @media screen and (max-width: 64rem) {
        position: relative;
        top: 3.5rem;
        right: 3.5rem;
        margin: 0 17.5rem;
        width: 30rem;
        height: 30rem;
    }

    @media screen and (max-width: 61.875rem) {
        margin: 0 19rem;
        width: 23.75rem;
        height: 23.75rem;
    }

    @media screen and (max-width: 58.75rem) {
        width: 22.5rem;
        height: 22.5rem;
    }

    @media screen and (max-width: 55.625rem) {
        margin: 0 18.25rem;
        width: 21.25rem;
        height: 21.25rem;
    }

    @media screen and (max-width: 49.375rem) {
        margin: 0 16.25rem;
        width: 28.75rem;
        height: 28.75rem;
    }

    @media screen and (max-width: 48rem) {
        position: relative;
        top: 2rem;
        right: 2rem;
        margin: 0 18rem;
        width: 27.5rem;
        height: 27.5rem;
    }

    @media screen and (max-width: 43.125rem) {
        margin: 0 17rem;
        width: 26.25rem;
        height: 26.25rem;
    }

    @media screen and (max-width: 41.6rem) {
        margin: 0 16rem;
        width: 25rem;
        height: 25rem;
    }

    @media screen and (max-width: 40.8rem) {
        margin: 0 13rem;
        width: 25rem;
        height: 25rem;
    }

    @media screen and (max-width: 40rem) {
        margin: 0 10rem;
    }

    @media screen and (max-width: 26.563rem) {
        margin: 0 9rem;
    }

    @media screen and (max-width: 23.438rem) {
        margin: 0 7.5rem;
        position: relative;
        right: 1.7rem;
    }
`;

const LeaderboardTitle = styled.h1`
    font-family: 'Retro', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 48px;
    text-align: center;
    position: relative;
    left: 15px;
    @media screen and (max-width: 1400px) {
        font-size: 42px;
    }
    @media screen and (max-width: 1200px) {
        font-size: 36px;
        position: relative;
        left: 20px;
    }
    @media screen and (max-width: 1000px) {
        font-size: 32px;
        position: relative;
        left: 20px;
    }
    @media screen and (max-width: 1000px) {
        font-size: 32px;
        position: relative;
        left: 7px;
    }
`;

const LeaderboardTable = styled.table`
    list-style-type: none;
    position: relative;
    left: 230px;
    @media screen and (max-width: 1200px) {
        position: relative;
        left: 180px;
    }
    @media screen and (max-width: 850px) {
        position: relative;
        left: 160px;
    }
    th {
        -webkit-columns: 2;
        -moz-columns: 2;
        columns: 2;
        -webkit-column-gap: 18em;
        -moz-column-gap: 18em;
        column-gap: 18em;
        font-weight: bolder;
        font-size: 20px;
        @media screen and (max-width: 1400px) {
            -webkit-column-gap: 16em;
            -moz-column-gap: 16em;
            column-gap: 16em;
        }
        @media screen and (max-width: 1300px) {
            -webkit-column-gap: 15em;
            -moz-column-gap: 15em;
            column-gap: 15em;
        }
        @media screen and (max-width: 1200px) {
            -webkit-column-gap: 12em;
            -moz-column-gap: 12em;
            column-gap: 12em;
        }
    }
    td {
        font-size: 24px;
        font-weight: bolder;
        color: pink;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    
`


const ButtonLine = styled.div`
    display: flex;
`

const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border-radius: 8px;
    box-sizing: border-box;
    border: solid 3px black;
    position: relative;
    top: 50px;
     
    @media screen and (max-width: 850px) {
        font-size: 14px;
        width: 120px;
    }
`;

class Leaderboard extends React.Component {

    state = {
        clickedReturn: false,
        list: [],
    }

    componentDidMount() {
        this.getList();
    }

    handleClickReturn () {
        this.setState({
          clickedReturn: true
        })
      }

    getList = () => {
        fetch('/api/scores')
        .then(res => res.json())
        .then(list => this.setState({ list }))
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
    }

    // handleSubmit(e){
    //     e.preventDefault();
        
    //     const userScore = {
    //         name : this.state.name,
    //         score: this.state.score
    //     };

    //     axios.post('localhost:5000/api/scores/post', userScore)
    //         .then(res => console.log(res.data))

    //     this.setState({
    //         name: '', 
    //         score:''
    //     })
    // }

    inputChangeHandler(e) {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
         formFields
        });
       }
    
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeScore(e) {
        this.setState({
            score: e.target.value
        });
    }
    
    renderContent1() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default: 
                return <li><a href="/api/logout">Logout</a></li>
        }
    }

    renderContent2() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default: 
                return <PostScore/>

        }
    }
    formHandler(formFields) {
    axios.post('/api/scores/post', formFields)
        .then(function(response){
        console.log(response);
        //Perform action based on response
    })
        .catch(function(error){
        console.log(error);
        //Perform action based on error
        });
    }

    render() {

        const { list } = this.state;

        if (this.state.clickedReturn === false) {

        return(
            <LeaderboardBackground>
                <CardWrapper>
                    <StyledLeaderboard>
                            <LeaderboardTitle>
                                Greatest Bingemasters
                            </LeaderboardTitle>
                            <div className="LeaderboardWrapper" style={{overflowX: 'hidden', overflowY:'scroll', border:'1px black'}}>
                                <LeaderboardTable>
                                    {list.length ? (
                                    <div>
                                    {list.map((item) => {
                                        return(
                                            <tbody>
                                            <tr>
                                                <th>{item.name}</th>
                                                
                                                <th>{item.score}</th>
                                            </tr>
                                            </tbody>
                                        );
                                    })}
                                    </div>
                                    ) : (
                                        <span>
                                            <p style={{fontSize: '1rem', transform: `translate(${-230}px, ${0}px)`}}>Users must login to see the leaderboard</p>
                                        </span>
                                    )
                                    }
                                </LeaderboardTable>
                            <ButtonLine>
                            </ButtonLine>
                            </div>
                            <ReturnHomeButton 
                                type="submit"
                                onClick={this.handleClickReturn.bind(this)}
                                >Return Home      
                            </ReturnHomeButton>
                        </StyledLeaderboard>
                    </CardWrapper>
                </LeaderboardBackground>
        )} else {
            return <HomePage/> 
        }
    }
}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Leaderboard);