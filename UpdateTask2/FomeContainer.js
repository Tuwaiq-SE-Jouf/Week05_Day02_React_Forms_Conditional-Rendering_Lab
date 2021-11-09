import { Component } from "react";
import FomeComponent from "./FomeComponent";


class FomeContainer extends Component
{
    constructor() {
        super();
        this.state = {
          firstName: "",
          lastName: "",
          ageUser :"",
          gender: "",
          location: "",
          vegan: false,
          kosher:false,
          halal:false,
    
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ?
          this.setState({ [name]: checked })
          : this.setState({ [name]: value });
      }
      componentDidUpdate(){
        if(this.state.halal){
            document.getElementById("dietaryRestrictions").innerHTML+=" Halal, "
          }
         
          else if(this.state.kosher){
            document.getElementById("dietaryRestrictions").innerHTML+=" Kosher, "
        }
        else{
          document.getElementById("dietaryRestrictions").innerHTML+=" Vegan"
        }
      }
      
      handelClick =(event)=>
      {
          event.preventDefault();
      };

render(){
    return(
        <FomeComponent handleChange={this.handleChange} handelClick={this.handelClick}
        data={this.state} />
    )
}    
}
export default FomeContainer;