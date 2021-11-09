import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName:"",
      lastName:"",
      Age:"",
      Gender:"",
      Location:false ,
      dietaryRes:""

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
          name="Age"
          value={this.state.Age} 
          onChange={this.handleChange}/>

          <br/> <hr/>

          <label>
          <input
            type="radio"
            name="Gender"
            value="Male"
            checked={this.state.Gender === "Male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="Gender"
            value="Female"
            checked={this.state.Gender === "Female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>
            
          <br/> <hr/>
          <label> dietary restrictions : </label>
          <select
          value={this.state.dietaryRes}
          onChange={this.handleChange}
          name="dietaryRes" >

          <option value="select dietaryRes">Please select a dietary restrictions </option>
          <option value="Vegan"> Vegan</option>
          <option value="Halal"> Halal</option>
          <option value="Kosher">Kosher</option>
          </select>

          <br /> <br/>

          <label>
          <input
            type="checkbox"
            name="Location"
            checked={this.state.Location}
            onChange={this.handleChange}/> 
            {""} location </label>

            <br/> <br/>

           <button>Submit</button>

        </form>

        <hr /> <hr />

        <h2>Entered information:</h2>
        <p>Your name:{this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.Age}</p>
        <p>Your gender: {this.state.Gender}</p>
        <p>Your destination: {this.state.Location}</p>
        <p>
          Your dietary restrictions:
          {this.state.dietaryRes}
        </p>
      </main>
    );
  }
}
export default App;