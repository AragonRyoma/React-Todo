import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({ name: "" });
  }

  handleClear(e) {
    e.preventDefault();
    const newTodo = { name: this.state.name, completed: false, id: Date.now() };
    this.props.clear(newTodo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="Enter task here"
          name="todo"
          value={this.state.name}
        ></input>
        <button onClick={this.handleSubmit}>submit task</button>
        <button onClick={this.handleClear}>clear task</button>
      </form>
    );
  }
}

export default TodoForm;
