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
      count: 0
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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
<<<<<<< HEAD
        { id: Date.now, title: title, description: description, isComplete: false }
      ]
    });
  }
=======
        {
          id: Date.now,
          title: title,
          description: description,
          isComplete: false
        }
      ]
    });
  }

>>>>>>> 76895d557423a9c02dd1915f387026c55262e5ac
  handleUpdate(id, title, description) {
    const { todoItems } = this.state;
    let update = todoItems.find(item => item.id === id);
    update.title = title;
<<<<<<< HEAD
    update.description = description
=======
    update.description = description;
>>>>>>> 76895d557423a9c02dd1915f387026c55262e5ac
    this.setState({
      todoItems: todoItems
    });

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
<<<<<<< HEAD
          <Link to="/Home">
=======
          <Link to="/">
>>>>>>> 76895d557423a9c02dd1915f387026c55262e5ac
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
