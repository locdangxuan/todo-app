import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import check from "../checked.png";
import uncheck from "../unchecked.png";


class TodoItems extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = uncheck;
        if(item.isComplete){
            url = check;
        }
        return (
          <div>
            <div onClick={onClick} className={classNames('TodoItem', {'TodoItem-Complete': item.isComplete})}>
                 <img src = {url} alt = "ckeck" onClick = {onClick} className = "check-logo"/>
                <p>{this.props.item.title}</p>
            </div>
          </div>
        );
    }
}

export default TodoItems;