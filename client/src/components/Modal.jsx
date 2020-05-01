import React, { Component } from 'react';
import ReactModal from 'react-modal';
import HomePage from './HomePage';


class Modal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal.bind(this)}>Main Menu</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <p>Are you sure?</p>
          <p>If you continue, your score will not be recorded.</p>
          <a href='/'><button>Continue</button></a>
          <button onClick={this.handleCloseModal.bind(this)}>Go Back</button>
        </ReactModal>
      </div>
    );
  }
}

const props = {};


export default Modal;