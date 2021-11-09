import React, { Component } from "react";
class App extends Component {
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
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br /><br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br /><br />
        <input
          type="text"
          value={this.state.ageUser}
          name="ageUser"
          placeholder="Your Age"
          onChange={this.handleChange}
        />
        <br /><br />
     
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
        <br />
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
      
        <br /><br />
        
        
       
        <label>
     
          <hr />
        <h2>Entered information:</h2>
        <p>Your name:  {this.state.firstName} {this.state.lastName} </p>
        <p>Your age: {this.state.ageUser}</p>
        <p>Your gender: {this.state.gender}</p>
     
        <label>Your Location :</label>
        <select
          value={this.state.location}
          onChange={this.handleChange}
          name="location"
        >
          <option value="select color">Please select your location :</option>
          <option value="domataljandal ">Domat al Jandal </option>
          <option value="dammam">Dammam</option>
          <option value="abha">Abha</option>
          <option value="mecca">Mecca</option>
          <option value="jubail">Jubail</option>
        
        </select>
        
        <p>
        
        
        Your dietary Restrictions :
        <br />
          <input
            type="checkbox"
            name="vegan"
            checked={this.state.vegan}
            onChange={this.handleChange}
          />{" "} Vegan 
          <br />
             <input
            type="checkbox"
            name="kosher"
            checked={this.state.kosher}
            onChange={this.handleChange}
          />{" "} Kosher
          <br />
             <input
            type="checkbox"
            name="halal"
            checked={this.state.halal}
            onChange={this.handleChange}
          />{" "} Halal
          
          <hr />
        </p>
     
        </label>
        <br /><br />
        <button>Submit</button>
      </form>
    );
  }
}
export default App;