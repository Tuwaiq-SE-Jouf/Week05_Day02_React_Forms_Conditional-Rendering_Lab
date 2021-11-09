import React, { Component } from "react";
import FormComponent from "./FormComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
        firstName:"",
        lastName:"",
        age:"",
        kosher:false,
        Halal:false,
        vegan:false,
        gLocation:"",
        gender:""
    };
  }  handleChange=(event)=>{
    const { name, value, type, checked } = event.target;
   
    type === "checkbox" ?
      this.setState({ [name]: checked }) :
      this.setState({ [name]: value });
  }
  componentDidUpdate(){
    if(this.state.Halal){
        document.getElementById("Halal").innerHTML="Halal, "
      }
      else{
        document.getElementById("Halal").innerHTML=""
      }
      if(this.state.kosher){
        document.getElementById("Kosher").innerHTML="Kosher, "
    }
    else{
        document.getElementById("Kosher").innerHTML=""
    }
    if(this.state.vegan){
        document.getElementById("Vegan").innerHTML="Vegan"
    }
    else{
        document.getElementById("Vegan").innerHTML=""
    }
  }
  render() {
    return( <FormComponent
    handleChange={this.handleChange}
    data={this.state}
    />)

  }
}


export default App;