import React, { Component } from "react";
import FormComponent from "./FormComponent";
/**
* Task: Wire up the partially-finished travel form so that it works!
* Remember to use the concept of controlled forms
* https://reactjs.org/docs/forms.html
*
*/
class FormContainer extends Component {
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
    //this is called object destructuring
    type === "checkbox" ?
      this.setState({ [name]: checked }) :
      this.setState({ [name]: value });
  }
  
  handleClick=(event)=>{
       event.preventDefault();
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
    }}
  render() {
    return (
  <FormComponent handleChange={this.handleChange} handleClick={this.handleClick} 
  date={this.state}
  />  );}
}
export default FormContainer;