import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './Modal.css';


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
           className='Modal'
           shouldCloseOnOverlayClick={false}
           
        >
          <p>Are you sure?</p>
          <p>If you continue, your score will not be recorded.</p>
          <div>
          <a href='/'><button className="ModalButton">Continue</button></a>
          <button className="ModalButton" onClick={this.handleCloseModal.bind(this)}>Go Back</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

const props = {};


export default Modal;