import React, { Component } from "react";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alex",
      age: 25,
    };
  }

  updateName = () => {
    this.setState({ name: "Alice" });
  };

  birthday = () => {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  };

  render() {
    const { name, age } = this.state;

    return (
      <div
        style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}
      >
        <h3>Профиль пользователя (Class)</h3>
        <p>Имя: {name}</p>
        <p>Возраст: {age}</p>
        <button onClick={this.updateName}>Сменить имя</button>
        <button onClick={this.birthday}>День рождения</button>
      </div>
    );
  }
}
