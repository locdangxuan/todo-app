import React, { Component } from "react";
import "./Stats.css";

class stats extends Component {
  render() {

    console.log(this.props.count)
    return (
      <div className="stats">
        <h3>Active tasks : {this.props.count}</h3>
        <h3>Completed tasks : </h3>
      </div>
    );
  }
}

export default stats;
