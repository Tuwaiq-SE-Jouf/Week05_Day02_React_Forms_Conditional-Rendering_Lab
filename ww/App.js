
import React, { Component } from "react";
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
    this.handleChange = this.handleChange.bind(this);
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
        
    
    <input name="FirstName"
          placeholder="first Name"
          value ={this.state.firstName} 
          onChange={this.handleChange}/>
        
          <br />

          <input name="LastName"
          placeholder="last Name"
          value={this.state.lastName}
          onChange={this.handleChange} />

          <br />

          <input placeholder="Age"
          name="age"
          value={this.state.age} 
          type="number"
          onChange={this.handleChange}/>

          <br/> <hr/>

          <label>

             <input type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          female
        </label>

        <br />

        <label>
            <input type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
        />
          male
        </label>

          <br/> <hr/>
          
          <label>  location:</label>
        <select
          value={this.state.location}
          onChange={this.handleChange}
          name="location"
          >
         

          <option value="your location">Please select a location :</option>
          <option value="sakaka">Sakak</option>
          <option value="domatAljondal">tabuk</option>
          <option value="sakaka">mecca</option>
        </select>
          

          <br /> <br/>
          
          <label>
          
           <input  type="checkbox"
            name="Vegan"
            checked={this.state.Vegan}
            onChange={this.handleChange}
          />
           Vegan 
        </label>
        <br></br>
        <label>
          
            <input type="checkbox"
            name="Kosher"
            checked={this.state.Kosher}
            onChange={this.handleChange}
          />
           Kosher 
        </label>
        <br></br>
        <label>
          
        <input type="checkbox"
            name="Halal"
            checked={this.state.Halal}
            onChange={this.handleChange}
          />
           Halal
        </label>
   
            <br/> <br/>

           <button>Submit</button>

        </form>
        <hr /> <hr />

        <h2>Entered information:</h2>
        <p> Your Name: {this.state.firstName}</p>
         <p>Your Name: {this .state.lastName}</p>
         <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
         <p> Your dietary restrictions:{this.state.dietaryRestrictio}</p>

      </main>
    );
    }
}
export default App
    
