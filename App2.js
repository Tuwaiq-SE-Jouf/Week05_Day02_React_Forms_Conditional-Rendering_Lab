import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      x: [],
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
    const y = event.target.checked;

    if (y) {
      this.setState({ x: [...this.state.x, event.target.value] });
    } else {
      const index = this.state.x.indexOf(event.target.value);
      this.state.x.splice(index, 1);
      this.setState({ x: this.state.x });
    }
  };

  render() {
    let { x } = this.state;
    let r;
    if (x && x.length > 0) {
      console.log("dietary");
      console.log(x);
      r = x.map((e) => {
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
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <br />
          {/* Create check boxes for dietary restrictions here. Like Vegan, Kosher, Halal, etc*/}
          <input
            type="checkbox"
            name="dietary"
            value="Vegan"
            name1="Halal"
            onChange={this.onChange}
          />
          <label>Vegan</label>
          <br />
          <input
            type="checkbox"
            name="dietary"
            value="Kosher"
            name1="Halal"
            onChange={this.onChange}
          />
          <label>Kosher</label>
          <br />
          <input
            type="checkbox"
            name="dietary"
            value="Kosher"
            name1="Halal"
            onChange={this.onChange}
          />
          <label>Halal</label>
          <br />

          <br />
          <button>Submit</button>
        </form>
        <hr />

        <p> name: {this.state.firstname + " " + this.state.lastname}</p>
        <p> age: {this.state.age}</p>
        <p> gender: {this.state.gender}</p>
        <p>destination: {this.state.location}</p>
        <p>
          dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
          {r}
        </p>
      </main>
    );
  }
}
export default App;

