import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      nutrition: false,
      dietaryRestrictions1: false,
      dietaryRestrictions2: false,
      dietaryRestrictions3: false,
      gender: "",
      location: "",
      Age:""
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
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.Age}
          name="Age"
          placeholder="Age"
          onChange={this.handleChange}
        />
        {/**
         * Other useful form elements:
         *
         *  <textarea /> element
         *  <input type="checkbox" />
         *  <input type="radio" />
         *  <select> and <option> elements
         */}
        <br />
        <label>
          <input
            type="checkbox"
            name="dietaryRestrictions1"
            checked={this.state.dietaryRestrictions1}
            onChange={this.handleChange}
          />{" "}
          Vegan
        </label>
        
        <label>
          <input
            type="checkbox"
            name="dietaryRestrictions2"
            checked={this.state.dietaryRestrictions2}
            onChange={this.handleChange}
          />{" "}
          Kosher
        </label>
        <label>
          <input
            type="checkbox"
            name="dietaryRestrictions3"
            checked={this.state.dietaryRestrictions3}
            onChange={this.handleChange}
          />{" "}
          Halal
        </label>
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
        {/* Formik */}
        <br />
        <label>Your location:</label>
        <select
          value={this.state.location}
          onChange={this.handleChange}
          name="location"
        >
          <option value="select color">Your location</option>
          <option value="Sakaka">Sakaka</option>
          <option value="Riyadh"> Riyadh</option>
          <option value="Makkah">Makkah</option>
        </select>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>Entered information:</h2>
        <h3>Your Age {this.state.Age}</h3>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your destination {this.state.location}</h2>
        <h2>Your dietary restrictions {this.state.dietaryRestrictions1}</h2>
        <button>Submit</button>
      </form>
    );
  }
}
export default App;