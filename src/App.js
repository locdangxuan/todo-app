import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import Home from "./components/Home";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import TodoItem from "./components/TodoItem";
import './App.css'
import AddItem from "./components/AddItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { id: 1, title: "Go to school", describe: "", isComplete: true },
        { id: 2, title: "Soccer", describe: "", isComplete: false },
        { id: 3, title: "Homework", describe: "", isComplete: false }
      ],
      newItem: '',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.onDelete = this.onDelete.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
  }

  onDelete(id){
    const todoItems = this.state.todoItems.filter(item => item.id !== id);
    this.setState({ todoItems: todoItems });
  }

  onUpdate(id){
    console.log('updated')
  }

  handleInputValue(val) {
    this.setState({
      newItem: "",
      todoItems: [...this.state.todoItems, { id: Date.now, title: val, isComplete: false }]
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
            <h1 className="title">TODO-APP</h1>
            {todoItems.length > 0 &&
              todoItems.map((item, index) => (
                <TodoItem
                  key={index}
                  id = {item.id}
                  item={item}
                  onClick={this.onItemClicked(item)}
                  todoItems={todoItems}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                />
              ))}
            {todoItems.length === 0 && <div>Nothing here</div>}
            <AddItem handleInput={this.handleInputValue} ></AddItem>
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
