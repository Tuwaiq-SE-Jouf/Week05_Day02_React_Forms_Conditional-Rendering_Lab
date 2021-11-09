import React, { Component }  from "react";

/*
Task:
​
Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/
class App extends Component {
constructor (props){
  super(props)
  this.state ={
    isLog : false

  }
}
handelClick =() => {

    this.setState(prevState => {
      return {isLog: !prevState.isLog}
    })
}

render (){
  let txt1 = this.state.isLog ? " Log Out" : "Log In" 
  let txt2 = this.state.isLog ? " User is Log In" : "User is Log Out" 
  return(
  <div>
   <h1>{txt2}</h1>
    <button onClick={this.handelClick} > {txt1} </button>
  </div> 
  )
}
}
export default App;