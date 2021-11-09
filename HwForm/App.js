import React, { Component } from "react";
import '../index.css'

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
      Email:"",
     phoneNumber:"",
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
        <form className="stay">
          <input 
          placeholder="First Name"
          name="firstName"
          value ={this.state.firstName} 
          onChange={this.handleChange}/>

          <br/>

          <input placeholder="Last Name"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange} />

          <br/>
          <input placeholder="Age"
          name="age"
          value={this.state.age} 
          onChange={this.handleChange}/>
          <br/>

          <input placeholder="phoneNumber"
          name="phoneNumber"
          value={this.state.phoneNumber} 
          onChange={this.handleChange}/>

          <br/> 
          <input placeholder="Email"
          name="Email"
          value={this.state.Email} 
          onChange={this.handleChange}/>
           <br/> <br/>

          <label >
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>

        <br/>

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

          <br/> <br/>

          <label>
          <input
            type="checkbox"
            name="location"
            checked={this.state.location}
            onChange={this.handleChange}/> 
            {this.state.location} location </label>

            <br/> <br/>

           <button class="btn btn-primary">Submit</button>

        </form>

        <br/> 
        <div className="information">
        <h2>Entered information:</h2>
        <p>Your name:{this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>your phoneNumber:{this.state.phoneNumber} </p>
        <p>your Email:{this.state.Email} </p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          {this.state.dietaryRestrictions}
        </p>
        </div>
      </main>
    );
  }
}
export default App;