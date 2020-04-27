import React, { Component } from 'react';

class HiScore extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            score: 0
        }
    }
    render() { 
        return (
            <div>  
                <h1>Hiscore Dummy Form</h1>
                <form>
                    <label/>Name (Initials)
                        <input 
                            type='text' 
                            required 
                            maxLength="3"
                        />
                    <label/>score
                        <input 
                            type='number'
    
                        />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default HiScore;