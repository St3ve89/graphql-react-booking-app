import React, { Component } from 'react';
import Modal from '../components/modal/Modal';
import Backdrop from '../components/backdrop/Backdrop';

import './Events.css';

class EventsPage extends Component {
  state ={
    creating: false
  };

  createEventHandler = () => {
    this.setState({creating: true});
  };

  modalConfirmHandler = () => {
    this.setState({creating: false});
  };

  modalCancelHandler = () => {
    this.setState({creating: false});
  };

  render () {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && <Modal title="Add Event" canCancel="true" canConfirm="true" onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
          <p>Modal content</p>
        </Modal>}
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn" onClick={this.createEventHandler}>Create Event</button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;