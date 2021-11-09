
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "",
      age:"",
      location: "",
      isVegan:false,
      isKosher:false,
      isHalal:false
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
          <br />
          <input 
          type="number"
           value={this.state.age}
           name="age"
          placeholder="Age"
          onChange={this.handleChange}

          />
          <br />

          <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Is friendly?
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
        <br />
        <label>Favorite Color:</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="select color">Please select a color :</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <br></br> <br></br>

        <label> your location:</label>
        <select
          value={this.state.location}
          onChange={this.handleChange}
          name="location"
        >
          <option value="your location">Please select a location :</option>
          <option value="sakaka">Sakak</option>
          <option value="domatAljondal">DomatAljandal</option>
          <option value="aladari">Aladari</option>
          <option value="qurayyat">Qurayyat</option>
        </select>

       <br></br>
        <h2 style={{fontFamily:"inherit"}}> Dietary Restrictions : </h2>
        
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={this.state.isVegan}
            onChange={this.handleChange}
          />{" "}
          Is Vegan ?
        </label>
        <br></br>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={this.state.isKosher}
            onChange={this.handleChange}
          />{" "}
          Is Kosher ? 
        </label>
        <br></br>
        <label>
          <input
            type="checkbox"
            name="isHalal"
            checked={this.state.isHalal}
            onChange={this.handleChange}
          />{" "}
          Is Halal ?
        </label>
       <hr></hr>
       <h2 style={{fontFamily:"fantasy" , color:"red"}}>Entered information :</h2>
       
        <h1 style={{fontFamily:"fantasy"}} >
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2 style={{fontFamily:"fantasy"}}>Your age is :{this.state.age}</h2>
        <h2 style={{fontFamily:"fantasy"}} >You are a :{this.state.gender}</h2>
        <h2 style={{fontFamily:"fantasy"}} >Your favorite color is : {this.state.favColor}</h2>
        <h2 style={{fontFamily:"fantasy"}}>your location is :{this.state.location}</h2>
        <button style={{background:"yellow" ,fontFamily:"fantasy"}}>Submit</button>
      </form>
    );
  }
}
export default App;


