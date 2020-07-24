import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import { render } from '@testing-library/react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import about from './components/pages/about';
import uuid from 'react-uuid';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid(),
        title: "Dinner with the wife",
        completed: false
      },
      {
        id: uuid(),
        title: "Go grocery shopping",
        completed: true
      }
    ]
  }

  // Toggle completion
  markComplete = (id) => (
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  )

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={about} />
          </div>
        </div>
      </Router>
    )
  }
}


export default App;
