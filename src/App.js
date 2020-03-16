import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import Home from "./components/Home";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TodoItem from "./components/TodoItem";;
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "Go to school", describe: "", isComplete: true },
        { title: "Soccer", describe: "", isComplete: false },
        { title: "Homework", describe: "", isComplete: false }
      ]
    };
  }
 
  onItemClicked(item) {
    return event => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        <Router>
          <SideNav
            onSelect={selected => {
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-home"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>
                  <Link to="/todo">Todo-List</Link>
                </NavText>
              </NavItem>
              <NavItem eventKey="charts">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-line-chart"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>
                  <Link to="/statistics">Statistics</Link>
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <Route path="/todo">
            {todoItems.length > 0 &&
              todoItems.map((item, index) => (
                <TodoItem
                  key={index}
                  item={item}
                  onClick={this.onItemClicked(item)}
                />
              ))}
            {todoItems.length === 0 && <div>Nothing here</div>}  
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
