import React from 'react';
import GameOver from './GameOver';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import getActorsPage from '../utils/getActorsPage';
import randomizer from '../utils/randomizer';
import Leaderboard from '../components/Leaderboard';

const HTMLWrapper = styled.div`

    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 82vw 95vh;
    height: 100vh;    
`

const AppWrapper = styled.div`
    
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    top: 70px;
    right: 150px;

    @media screen and (max-width: 1150px) {
        position: relative;
        top: 80px;
        margin: 0 485px;    
    }

    @media screen and (max-width: 1100px) {
        position: relative;
        top: 80px;
        margin: 0 485px;
    }

    @media screen and (max-width: 1075px) {
        margin: 0 485px;
    }

    @media screen and (max-width: 1025px) {
        margin: 0 435px;
    }

    @media screen and (max-width: 950px) {
        margin: 0 415px;
    }

    @media screen and (max-width: 875px) {
        margin: 0 400px;
    }

    @media screen and (max-width: 800px) {
        margin: 0 380px;
    }

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
        position: relative;
        top: 120px;
        margin: 0 300px;
    }

    @media screen and (max-width: 625px) {
        position: relative;
        top: 120px;
        margin: 0 290px;
    }

    @media screen and (max-width: 600px) {
        position: relative;
        top: 120px;
        margin: 0 270px;
    }

    @media screen and (max-width: 575px) {
        position: relative;
        top: 120px;
        margin: 0 255px;
    }

`

const MainTitle = styled.h1`
    font-size: 52px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    @media screen and (max-width: 1150px) {
        font-size: 46px;
    }

    @media screen and (max-width: 650px) {
        font-size: 26px;
    }
`

const ImageAndHintsWrapper = styled.div`

    .hint {
        font-size: 18px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`

const ImageWrapper = styled.div`

    .theActorImg {
        border-radius: 10px;
        box-sizing: border-box;
        border: solid 8px pink;
    }
    
`

const ButtonLine = styled.div`
    display: flex;
`

const OptionOne = styled.button`
    background-color: pink;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 4px;
    box-sizing: border-box;
    border: solid 3px black;
`
const OptionTwo = styled.button`
    background-color: pink;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 4px;
    box-sizing: border-box;
    border: solid 3px black;
    margin-left: 3em;
`
const OptionThree = styled.button`
    background-color: pink;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 4px;
    box-sizing: border-box;
    border: solid 3px black;
    margin-left: 3em;
`
const OptionFour = styled.button`
    background-color: pink;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 4px;
    box-sizing: border-box;
    border: solid 3px black;
    margin-left: 3em;
`

const TimeAndScoreWrapper = styled.div`

    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;

`

class MultipleChoice extends React.Component {

    state = {

        loading: true,
        actorList: [],
        actorSelector: null,
        profilePath: "",
        actorName: "",
        movieName: "",
        secondMovieName: "",
        count: 10000,
        resetTimer: false,
        currentScore: 0,
        wrongAnswer: false

    };

    componentDidMount() {
        this.setNewPage();
        this.doIntervalChange();
    }

    async setNewPage() {
        let actors = await getActorsPage();
        let correctActor = await actors[randomizer(1,18)]

          while (
            !correctActor.known_for ||
            correctActor.known_for.length <= 2 ||
            !correctActor.profile_path ||
            correctActor.popularity <= 7
          ) {
            let actors = await getActorsPage();  
            correctActor = await actors[randomizer(1,18)];
          }
        

        let dudActor1 = await actors[(1,6)];
        let dudActor2 = await actors[(7,12)];
        let dudActor3 = await actors[(13,17)];
    
        const correctActorPhotoPath = await correctActor.profile_path;
        const correctActorName = await correctActor.name;
        const movieTheyWereIn = await correctActor.known_for[0].title;
        const secondMovieTheyWereIn = await correctActor.known_for[1].title;
        const firstDudActorName = await dudActor1.name;
        const secondDudActorName = await dudActor2.name;
        const thirdDudActorName = await dudActor3.name;
        let actorList = [correctActorName, firstDudActorName, secondDudActorName, thirdDudActorName];

        function shuffle (actorList) {
            let currentIndex = actorList.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              // And swap it with the current element.
              temporaryValue = actorList[currentIndex];
              actorList[currentIndex] = actorList[randomIndex];
              actorList[randomIndex] = temporaryValue;
            }
            return actorList;
          }
          shuffle(actorList);

        await this.setState({
          loading: false,
          actorList: actorList,
          profilePath: correctActorPhotoPath,
          actorName: correctActorName,
          movieName: movieTheyWereIn,
          secondMovieName: secondMovieTheyWereIn,

        });
        console.log(correctActorName);
        console.log(correctActor.popularity);
        console.log(correctActor.known_for_department);
      }
    
    handleClick = (event) => {

        const value = event.target.value;
        const { actorName } = this.state;
        let { currentScore } = this.state;

        if (value === actorName) {
           this.setNewPage();
           const newScore = (currentScore += 1);
           this.setState({
            count: 60,
            currentScore: newScore
        }) 
        } else {
            this.setState({
                wrongAnswer: true
            })
        }
    }

    resetClock () {
        clearInterval(this.myInterval)
        this.setState({
            // change
            count: 6
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
        
        
        if (this.state.count >= 1 && this.state.wrongAnswer === false) {

        return(
            <HTMLWrapper>
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
                    <ButtonLine>
                        <OptionOne
                        type="submit"
                        onClick={this.handleClick}
                        value={this.state.actorList[0]}
                        >{this.state.actorList[0]}
                        </OptionOne>
                        <OptionTwo
                        type="submit"
                        onClick={this.handleClick}
                        value={this.state.actorList[1]}
                        >{this.state.actorList[1]}
                        </OptionTwo>
                        <OptionThree
                        type="submit"
                        onClick={this.handleClick}
                        value={this.state.actorList[2]}
                        >{this.state.actorList[2]}
                        </OptionThree>
                        <OptionFour
                        type="submit"
                        onClick={this.handleClick}
                        value={this.state.actorList[3]}
                        >{this.state.actorList[3]}
                        </OptionFour>   
                    </ButtonLine> 
                    <TimeAndScoreWrapper>
                        <h2 className="time">Time left: {count}</h2>
                        {this.state.currentScore ? (
                        <h3 className="score">Streak: {currentScore}</h3>
                        ) : (
                        <h3 onClick={this.handleClick}>Streak: {currentScore}</h3>
                        )}    
                    </TimeAndScoreWrapper>
                </AppWrapper>
            </HTMLWrapper>
        )} else if (this.state.count === 0 && this.state.currentScore > 0) {
            return <Leaderboard currentScore={this.state.currentScore}/>
        } else if (this.state.wrongAnswer === true && this.state.currentScore > 0) {
            return <Leaderboard currentScore={this.state.currentScore}/>
        } else {
            return <GameOver/>
        }
    }
};

export default MultipleChoice;
    
