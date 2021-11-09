mport React, { Component } from "react";
/**
* Task: Wire up the partially-finished travel form so that it works!
* Remember to use the concept of controlled forms
* https://reactjs.org/docs/forms.html
*
*/
class Try extends Component {
  constructor() {
    super();
    this.state = {
        firstName:"",
        lastName:"",
        age:"",
        kosher:false,
        Halal:false,
        vegan:false,
        gLocation:"",
        gender:""
    };
  }  handleChange=(event)=>{
    const { name, value, type, checked } = event.target;
    //this is called object destructuring
    type === "checkbox" ?
      this.setState({ [name]: checked }) :
      this.setState({ [name]: value });
  }
  componentDidUpdate(){
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
        <form>
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
          placeholder="Age"
          type="text"
          value={this.state.age}
          name="age"
          onChange={this.handleChange}/>
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
          {/* Create radio buttons for gender here */}
          <br />
          <label>Your Location:</label>
        <select
          value={this.state.gLocation}
          onChange={this.handleChange}
          name="gLocation"
        >
          <option value="select location">Please select your location</option>
          <option value="Dummah Al Jandal">Dummah Al Jandal</option>
          <option value="Riyadh">Riyadh</option>
          <option value="Jeddah">Jeddah</option>
          <option value="Sakkakah">Sakkakah</option>
        </select>
          {/* Create select box for location here */}
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
          {/* Create check boxes for dietary restrictions here. Like Vegan, Kosher, Halal, etc*/}
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.gLocation}</p>
        <p>
          Your dietary restrictions:
        </p>
        <p id="Kosher">
        </p>
        <p id="Halal"></p>
        <p id="Vegan"></p>
      </main>
    );
  }
}
export default Try;