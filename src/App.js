import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [...Todo],
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggle = this.toggle.bind(this);
    this.clear = this.clear.bind(this);
  }

  addTodo = (todo) => {
    const newTodo = {
      name: todo,
      completed: false,
      id: Date.now,
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo],
    });
  };

  toggle = (item) => {
    const newTodo = this.state.todo.map((todo) => {
      if (todo.id === item.id) todo.completed = !todo.completed;
      return todo;
    });
    this.setState({ todo: newTodo });
  };

  clear = () => {
    const newTodo = this.state.todo.filter((todo) => {
      if (todo.completed === false) return true;
    });
    this.setState({ ...this.state, todo: newTodo });
  };

  render() {
    return (
      <div>
        <h2>Welcome to todo app thuingy</h2>
        <TodoList todo={this.state.todo} toggle={this.toggle} />
        <TodoForm addTodo={this.addTodo} clear={this.clear} />
      </div>
    );
  }
}

export default App;
