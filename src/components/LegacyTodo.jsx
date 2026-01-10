import React, { Component } from "react";

export default class LegacyTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ currentTask: event.target.value });
  };

  addTask = () => {
    if (this.state.currentTask.trim() !== "") {
      const newTasks = [...this.state.tasks, this.state.currentTask];
      this.setState({ tasks: newTasks, currentTask: "" });
    }
  };

  render() {
    return (
      <div className="todo-container">
        <div className="input-group">
          <input
            type="text"
            placeholder="Новая задача..."
            value={this.state.currentTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Добавить</button>
        </div>
        <ul>
          {this.state.tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}
