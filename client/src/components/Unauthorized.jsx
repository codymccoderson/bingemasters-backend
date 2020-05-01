import React, { Component } from 'react';

class Unauthorized extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                Oh noes, you must login 
            </div>
        );
    }
}
 
export default Unauthorized;