import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import bntEdit from "../edit.png";
class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      title: "",
      description: "",
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
    })
  }

  render() {
    const { modal } = this.state;
    const { title, description } = this.props;

    return (
      <div>
        <Button color="white" onClick={this.toggle}>
          <img alt="btn-edit" src={bntEdit} className="img-bnt"></img>
        </Button>

        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>EDIT TODO</ModalHeader>
          <ModalBody>
            <input
              name="title"
              ref="title"
              type="text"
              placeholder={title}
              onChange={e => this.handleOnChange('title', e.target.value)}
            ></input>
          </ModalBody>

          <ModalBody>
            <input
              name="description"
              ref="description"
              type="text"
              placeholder={description}
              onChange={e => this.handleOnChange('description', e.target.value)}
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

export default EditItem;
