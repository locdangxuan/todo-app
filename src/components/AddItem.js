import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddItem.css";
class AddItem extends Component {
  render() {
    return (
      <div>
        <label for="fname">First Name</label>
        <input
          type="text"
          placeholder="Todo.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          placeholder="Deb.."
        />
      </div>
    );
  }
}

export default AddItem;
