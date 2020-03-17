import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class EditItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            inputVal: ''
        };
        this.toggle = this.toggle.bind(this);
        this.submit = this.submit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    toggle(){
        const {modal} = this.state;
        this.setState({
            modal: !modal
        })
    }

    submit(){ 
      this.props.handleInput(this.state.inputVal);
      this.toggle();
    }

    handleOnChange(event){
      this.setState({ inputVal: event.target.value });
    }

    render(){
        const {modal} = this.state;
        const {title} = this.props;
        return (
            <div>
              <Button color="white" onClick={this.toggle}>
                Edit
              </Button>
              <Modal isOpen={modal} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>EDIT TODO</ModalHeader>
                <ModalBody>
                  <input name="title" ref="title"  type="text" placeholder={title} onChange={this.handleOnChange}></input>
                </ModalBody>
                <ModalBody>
                  <input name="description" ref="description" type="text" placeholder="Description..." onChange={this.handleOnChange}></input>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.submit} >Save</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          );
    }
  
}

export default EditItem;