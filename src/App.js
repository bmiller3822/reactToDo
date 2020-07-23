import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import { render } from '@testing-library/react';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with the wife",
        completed: false
      },
      {
        id: 3,
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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo} />
      </div>
    )
  }
}


export default App;
