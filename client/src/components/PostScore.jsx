import React, { Component } from 'react';
import Modal from '../components/Modal';
import ReactModal from 'react-modal';

class PostScore extends Component {
    state = {
        showModal: false
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
}


render() {
    return (
        <div>
        Submit your score to the overall leaderboard
                        <form onSubmit={this.handleSubmit.bind(this)} >
                            
                        <label/>Name:
                        <input  
                            type="text"
                            value={this.state.name}
                            required
                            maxLength="3"
                            onChange={this.onChangeName.bind(this)}
                        />
                        
                        <p>Streak Score: {this.props.currentScore}</p>

                        <input 
                            type="submit" 
                            value="Submit" 
                            onClick={this.handleOpenModal.bind(this)}
                        />
                        <ReactModal 
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        >
                        <p>Your score has been submitted!</p>
                        <p>See the leaderboard to see your entry!</p>
                        <a href='/'><button>Main Menu</button></a>
                        
                        </ReactModal>
                        </form>
                        <Modal/>
        </div>
    )
}
}

export default PostScore;