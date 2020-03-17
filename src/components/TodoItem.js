import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import check from "../checked.png";
import uncheck from "../unchecked.png";
import EditItem from "./EditItem"

class TodoItems extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.item.title
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue(val) {
    this.setState({
      title: val
    });
    this.props.onUpdate(this.props.id, val)
  }
  render() {
    const {title} = this.state;
    const { item, onClick } = this.props;
    let url = uncheck;
    if (item.isComplete) {
      url = check;
    }
    return (
      <div>
        <div
          onClick={onClick}
          className={classNames("TodoItem", {
            "TodoItem-Complete": item.isComplete
          })}
        >
          <img src={url} alt="ckeck" onClick={onClick} className="check-logo" />
          <p>{this.props.item.title}</p>
        </div>
        <div className="button-item">
          <EditItem handleInput={this.handleInputValue} title={title}/> 
          <button onClick={() => this.props.onDelete(this.props.id)}>
            Delete{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItems;
