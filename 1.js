import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState((prevState) => {
      return {
        loggedIn: !prevState.loggedIn,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>
          {this.state.loggedIn ? "Logged Out" : "Logged In"}
        </button>
      </div>
    );
  }
}

export default App;
