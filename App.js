import React from "react"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLogIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
          //      this.handleClick.bind(this)
   //     this.handleClick=()=>{ this.setSate !(this.state.isLogIn)}
  
        this.setState(prevState => {
            return {
                isLogIn: !prevState.isLogIn
            }
        })
    }
    
    render() {   
        let buttonText = this.state.isLogIn ? "log out" :"log in"
        let displayText = this.state.isLogIn ? "Log in" :"Log out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}

export default App
