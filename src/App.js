import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import Home from "./components/Home";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TodoItem from "./components/TodoItem";
import "./App.css";
import AddItem from "./components/AddItem";
import Stats from "./components/Stats";
import Logo from "./logo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { id: 1, title: "Go to school", description: "aa", isComplete: true },
        { id: 2, title: "Soccer", description: "bb", isComplete: false },
        { id: 3, title: "Homework", description: "cc", isComplete: false }
      ],
      newItem: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  onDelete(id) {
    const todoItems = this.state.todoItems.filter(item => item.id !== id);
    this.setState({ todoItems: todoItems });
  }

  onUpdate(id) {
    console.log("updated");
  }

  handleInputValue(title, description) {
    this.setState({
      newItem: "",
      todoItems: [
        ...this.state.todoItems,
        { id: Date.now, title: title, description: description, isComplete: false }
      ]
    });
  }
  handleUpdate(id, title, description) {
    const { todoItems } = this.state;
    let update = todoItems.find(item => item.id === id);
    update.title = title;
    update.description = description
    this.setState({
      todoItems: todoItems
    });
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
          <Link to="/Home">
            <img src={Logo} alt="img-logo" className="img-logo"></img>
          </Link>
          <SideNav>
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
                  id={item.id}
                  item={item}
                  onClick={this.onItemClicked(item)}
                  todoItems={todoItems}
                  onDelete={this.onDelete}
                  onUpdate={this.handleUpdate}
                />
              ))}
            {todoItems.length === 0 && <div>Nothing here</div>}
            <AddItem handleInput={this.handleInputValue}></AddItem>
          </Route>
          <Route path="/statistics">
            <Stats></Stats>
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
