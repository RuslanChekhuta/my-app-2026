import { Component } from "react";
import SimpleChild from "./SimpleChild";

class SmartParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedCount: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      sharedCount: prevState.sharedCount + 1,
    }));
  };

  render() {
    return (
      <div style={{ border: "2px dashed orange", padding: "20px" }}>
        <h2>Родитель (Class)</h2>
        <p>Баланс в родителе: {this.state.sharedCount}</p>
        <SimpleChild
          value={this.state.sharedCount}
          onIncrement={this.handleIncrement}
        />
        <SimpleChild
          value={this.state.sharedCount}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default SmartParent;
