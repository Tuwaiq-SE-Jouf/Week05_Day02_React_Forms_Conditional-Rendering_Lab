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
      age:"",
      gender: "",
      location: "",
      vegan: false,
      kosher:false,
      halal:false,
      dietaryRestrictions:""
      
    
    };
    
  }
    handleChange=(event)=> {
      const { name, value, type, checked } = event.target;
      type === "checkbox" ?
        this.setState({ [name]: checked  }) 
        : this.setState({ [name]: value });}
  
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
          <input placeholder="age"
           type="text"
           value={this.state.age}
           name="age"
           placeholder="your Age is "
           onChange={this.handleChange} />
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
        
        {/* Formik */}
        <br />
          
        <label>Your Location :</label>
        <select
          value={this.state.location}
          onChange={this.handleChange}
          name="location"
        >
          <option value="select Location"> select your location :</option>
          <option value="skakah ">skakah </option>
          <option value="khobar">khobar</option>
          <option value="Riyadh">Riyadh</option>
          <option value="Jeddah">Jeddah</option>
          <option value="Abha">Abha</option>
        
        </select>
        <br />
        
        
        Your dietary Restrictions :
        <br />
        <p>
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
          
          </p>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName} </p>
        <p>Your age:  {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>Your dietary restrictions:
        
        </p>
      </main>
    );
  }
}
export default App;