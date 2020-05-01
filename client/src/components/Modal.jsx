import React, { Component } from 'react';
import ReactModal from 'react-modal';
import HomePage from './HomePage';


class Modal extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <p>Are you sure?</p>
          <p>If you continue, your score will not be recorded.</p>
          <a href='/'>Continue</a>
          <button onClick={this.handleCloseModal}>Go Back</button>
        </ReactModal>
      </div>
    );
  }
}

const props = {};


export default Modal;