import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Add from "../plus.png"
import "./AddItem.css"
class ModalExample extends Component {
 
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);
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
        const {onChange} = this.props;
        return (
            <div className="add-button">
              <Button color="white" onClick={this.toggle}><img src={Add} className="img-add"></img></Button>
              <Modal isOpen={modal} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>ADD TODO</ModalHeader>
                <ModalBody>
                  <input name="title" ref="title" type="text" placeholder="Todo..." onChange={this.handleOnChange}></input>
                </ModalBody>
                <ModalBody>
                  <input name="descript" ref="description" type="text" placeholder="Description..."onChange={this.handleOnChange}></input>
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

export default ModalExample;