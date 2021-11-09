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
      firstName:"",
      lastName:"",
      age:"",
      gender:"",
      location:false ,
      dietaryRestrictions:""

    };
  }

  handleChange=(event)=>{
    const { name, value, type, checked } = event.target;
    type === "checkbox" ?
      this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input 
          placeholder="First Name"
          name="firstName"
          value ={this.state.firstName} 
          onChange={this.handleChange}/>

          <br />

          <input placeholder="Last Name"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange} />

          <br />

          <input placeholder="Age"
          name="age"
          value={this.state.age} 
          onChange={this.handleChange}/>

          <br/> <hr/>

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
            
          <br/> <hr/>
          <label> dietary restrictions : </label>
          <select
          value={this.state.dietaryRestrictions}
          onChange={this.handleChange}
          name="dietaryRestrictions" >

          <option value="select dietaryRes">Please select a dietary restrictions </option>
          <option value="Halal"> Halal</option>
          <option value="Vegan"> Vegan</option>
          <option value="Kosher">Kosher</option>
          </select>

          <br /> <br/>

          <label>
          <input
            type="checkbox"
            name="location"
            checked={this.state.location}
            onChange={this.handleChange}/> 
            {""} location </label>

            <br/> <br/>

           <button>Submit</button>

        </form>

        <hr /> <hr />

        <h2>Entered information:</h2>
        <p>Your name:{this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          {this.state.dietaryRestrictions}
        </p>
      </main>
    );
  }
}
export default App;