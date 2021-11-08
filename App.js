import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dietary: [],
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  handleSelectChange = (e) => {
    this.setState({ location: e.target.value });
  };

  onInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  onChangeValue({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  onChange = (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      this.setState({ dietary: [...this.state.dietary, event.target.value] });
    } else {
      const index = this.state.dietary.indexOf(event.target.value);
      this.state.dietary.splice(index, 1);
      this.setState({ dietary: this.state.dietary });
    }
  };

  render() {
    let { dietary } = this.state;
    let diateryList;
    if (dietary && dietary.length > 0) {
      console.log("dietary");
      console.log(dietary);
      diateryList = dietary.map((e) => {
        return <h6>{e}</h6>;
      });
    }
    return (
      <main>
        <form>
          <input
            placeholder="First Name"
            name="firstname"
            onChange={(e) => this.onInputChange(e)}
          />
          <br />
          <input
            placeholder="Last Name"
            name="lastname"
            onChange={(e) => this.onInputChange(e)}
          />
          <br />
          <input
            name="age"
            placeholder="Age"
            onChange={(e) => this.onInputChange(e)}
          />
          <br />
          <div onChange={this.onChangeValue}>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female <br />
          </div>
          {/* Create select box for location here */}
          <select onChange={(e) => this.handleSelectChange(e)}>
            <option>first</option>
            <option>second</option>
            <option>third</option>
          </select>
          <br />
          {/* Create check boxes for dietary restrictions here. Like Vegan, Kosher, Halal, etc*/}
          <input
            type="checkbox"
            name="dietary"
            value="teacher"
            onChange={this.onChange}
          />
          <label>teacher</label>
          <br />
          <input
            type="checkbox"
            name="dietary"
            value="doctor"
            onChange={this.onChange}
          />
          <label>doctor</label>
          <br />

          <input
            type="checkbox"
            name="dietary"
            value="Engineer"
            onChange={this.onChange}
          />
          <label>Engineer</label>
          <br />


          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstname }</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
          {diateryList}
        </p>
      </main>
    );
  }
}
export default App;