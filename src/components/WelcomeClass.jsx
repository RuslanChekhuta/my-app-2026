import React, { Component } from "react";

export default class WelcomeClass extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className="welcome-card">
        <h2>Привет, {name}</h2>
        <p>Я — классовый компонент.</p>
      </div>
    );
  }
}
