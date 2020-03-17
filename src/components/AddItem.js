import React, { Component } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Add from "../plus.png";

import "./AddItem.css";

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,

      inputTitle: "",

      inputDescription: ""
    };

    this.toggle = this.toggle.bind(this);

    this.submit = this.submit.bind(this);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  toggle() {
    const { modal } = this.state;

    this.setState({
      modal: !modal
    });
  }

  submit() {
    this.props.handleInput(this.state.title, this.state.description);

    this.toggle();
  }

  handleOnChange(input, value) {
    this.setState({
      [input]: value
    });
  }

  render() {
    const { modal } = this.state;

    return (
      <div className="add-button">
        <Button color="white" onClick={this.toggle}>
          <img alt="add-item" src={Add} className="img-add" />
        </Button>

        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>ADD TODO</ModalHeader>

          <ModalBody>
            <input
              name="title"
              ref="title"
              type="text"
              placeholder="Todo..."
              onChange={e => this.handleOnChange("title", e.target.value)}
            ></input>
          </ModalBody>

          <ModalBody>
            <input
              name="description"
              ref="description"
              type="text"
              placeholder="Description..."
              onChange={e => this.handleOnChange("description", e.target.value)}
            ></input>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.submit}>
              Save
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
