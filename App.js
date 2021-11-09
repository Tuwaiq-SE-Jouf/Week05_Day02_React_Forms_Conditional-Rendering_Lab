import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: false,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState((prevState) => {
      return {
        x: !prevState.x,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>
          {this.state.x ? "Logged Out" : "Logged In"}
        </button>
      </div>
    );
  }
}

export default App;
