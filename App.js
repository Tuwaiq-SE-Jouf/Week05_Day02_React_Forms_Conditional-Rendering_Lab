import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
      isLogin:"Log In",
      log:"Log Out"
    };
  }

  handelClick=()=>{
    if (this.state.isLogin="Log In"){
      this.setState({
        isLogin: "Log Out",
      });
    this.setState({
      log: "Log In",
    });}

  }
  render() {
  return <div>
   <h1 id="h">{this.state.log}</h1>
<p><button onClick={this.handelClick}>{this.state.isLogin}</button></p>

  </div>;
}}
export default App;