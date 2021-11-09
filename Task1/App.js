import React, { Component } from "react";

class App extends Component 
{
  constructor() {
    super();
    this.state = {
      massege:'',
      isLogged: 'In',
    };
  }


  handleClick=()=>{
  {
    if (this.state.isLogged='In')
    this.setState({
      isLogged: 'Out', massege : 'you are logOut now'});
  }
  }
  render() 
  {
 
    return  ( 
     <div>
       <h2> You Are Log {this.state.isLogged}</h2>
       <h3> Click The Button to logOut  </h3>
       <button onClick= {this.handleClick}> Log {this.state.isLogged} </button>
       < h2> {this.state.massege} </h2>
    
    
     </div>
    )
    
    
 
  }
}

export default App;