  import React,{Component}from "react";
  import FormComponant from "./FormComponant"

  
class FormContainer extends Component {
    constructor() {
      super();
      this.state = {
        firstName: "",
        lastName: "",
        age:"",
        isFriendly: false,
        gender: "",
        locat :"",
        dietary :"",
        kosher:false,
          Halal:false,
          vegan:false,
  
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      const { name, value, type, checked } = event.target;
      type === "checkbox" ?
        this.setState({ [name]: checked })
        : this.setState({ [name]: value });
    }
handleClick=(event) =>{
    event.preventDefault();
}

render(){
    return(
        <FormComponant
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        data={this.state}
        />
    )
}



}
 

export default FormContainer