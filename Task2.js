import React, { Component } from "react";

class Task2 extends Component {
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
  
  } componentDidUpdate(){
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
    return (
      <main>
        <form onSubmit={this.handleSubmit}>

        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
          <br />
          <input 
           type="text"
           value={this.state.age}
           name="age"
           onChange={this.handleChange}
           placeholder="Age" />
          <br />
          <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
          <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>
          <br />
          <label>location:</label>
        <select
          value={this.state.locat}
          onChange={this.handleChange}
          name="locat"
        >
          <option value="select color">Please select a location</option>
          <option value="aljuof">aljuof</option>
          <option value="Arar">Arar</option>
          <option value="Hail">Hail</option>
        </select>
          <br />
          <label>
          <input
            type="checkbox"
            name="kosher"
            checked={this.state.kosher}
            onChange={this.handleChange}
          />{" "}
            Kosher
        </label>
        <label>
          <input
            type="checkbox"
            name="Halal"
            checked={this.state.Halal}
            onChange={this.handleChange}
          />{" "}
            Halal
        </label>
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={this.state.vegan}
            onChange={this.handleChange}
          />{" "}
            Vegan
        </label>
          <br />
          <br/>
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.locat}</p>
        <p>
          Your dietary restrictions:
        </p>
        <p id ="Vegan"></p>
        <p id ="Kosher"></p>
        <p id ="Halal"></p>
      </main>
    );
  }
}
 export default Task2
