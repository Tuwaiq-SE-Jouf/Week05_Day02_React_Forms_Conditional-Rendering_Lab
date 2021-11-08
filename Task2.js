
import './App.css';


import React, { Component } from "react";
/**
* Task: Wire up the partially-finished travel form so that it works!
* Remember to use the concept of controlled forms
* https://reactjs.org/docs/forms.html
*
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender:"",
      destination: "",
      dietaryRestrictions: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox" ?
      this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }
  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br /><br />
          <input name="lastName"
            value={this.state.lastName}
            type="text"
            onChange={this.handleChange}
            placeholder="Last Name" />
          <br /><br />
          <input
            name="age"
            value={this.state.age}
            type="number"

            onChange={this.handleChange}
            placeholder="Age" />
          <br /><br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            female
          </label>

          <br /><br />
          <label>location:</label>
        <select
          value={this.state.destination}
          onChange={this.handleChange}
          name="destination"
        >
          <option value="select color">Please select a location</option>
          <option value="Riyadh">Riyadh</option>
          <option value="Abha">Abha</option>
          <option value="alsharqiah">alsharqiah</option>
        </select>


          <br />
          <label>
            <h4>dietary restriction:</h4>
            <input
              type="checkbox"
              value="Vegan"
              onChange={this.handleChange}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              value="Kosher"
              onChange={this.handleChange}
            />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              value="Halal"
              onChange={this.handleChange}
            />
            Halal
          </label>

          <br /> <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {this.state.dietaryRestrictions}
        </p>
      </main>
    );
  }
}
export default App;

