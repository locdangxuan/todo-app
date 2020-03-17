import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
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
      newItem: "",
      count: 0,
      listDone: 0,
      listNotDone: 0,
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.listDone = this.listDone.bind(this)
  }

  onDelete(id) {
    const todoItems = this.state.todoItems.filter(item => item.id !== id);
    this.setState({ todoItems: todoItems });
  }

  handleInputValue(title, description) {
    this.setState({
      newItem: "",
      todoItems: [
        ...this.state.todoItems,
        {
          id: Date.now,
          title: title,
          description: description,
          isComplete: false
        }
      ]
    });
  }

  handleUpdate(id, title, description) {
    const { todoItems } = this.state;
    let update = todoItems.find(item => item.id === id);
    update.title = title;
    update.description = description;
    this.setState({
      todoItems: todoItems
    });

  }
  
  listDone(todoItems) {
    const listItemDone = todoItems.filter(item => item.isComplete === false)
    return listItemDone.length
  }

  listNotDone(todoItems) {
    return todoItems.length - this.listDone(todoItems)
  }

  onItemClicked(item) {
    return event => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      let count = 0;
      const index = todoItems.indexOf(item);
      if(todoItems.length > 0){
        if(item.isComplete){
          count ++;
        }
        this.setState({
          todoItems: [
            ...todoItems.slice(0, index),
            {
              ...item,
              isComplete: !isComplete
            },
            ...todoItems.slice(index + 1)
          ], count
        });
      }
      
    };
  }

  render() {
    const { todoItems, count } = this.state;
    return (
      <div className="App">
        <Router>
          <p className="count">{this.listDone(todoItems)}</p>
          <p className="count">{this.listNotDone(todoItems)}</p>
          <Link to="/">
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
            <Stats count={count}></Stats>
          </Route>  
        </Router>
      </div>
    );
  }
}

export default App;
