import React, { Component } from "react";
import FormCo from "./event/FormCo";
import FormCom from "./event/FormCom";
function App(){
  return <FormCo /> 
    
  }


    export default App;
  
// import React, { Component } from "react";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       dietary: [],
//       gender: "",
//       location: "",
//       age:"",
     
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     const { name, value, type, checked } = event.target;//this is called object destracturing
//     type === "checkbox" ?
//       this.setState({ [name]: checked })
//       : this.setState({ [name]: value });
//   }
//   onInputChange({ target: { name, value } }) {
//     this.setState({ [name]: value });
//   }
//   handleSelectChange = (e) => {
//     this.setState({ location: e.target.value });
//   };

//   onChange = (event) => {
//     const isChecked = event.target.checked;

//     if (isChecked) {
//       this.setState({ dietary: [...this.state.dietary, event.target.value] });
//     } else {
//       const index = this.state.dietary.indexOf(event.target.value);
//       this.state.dietary.splice(index, 1);
//       this.setState({ dietary: this.state.dietary });
//     }
//   };
//   render() {
//     let { dietary } = this.state;
//     let diateryList;
//     if (dietary && dietary.length > 0) {
//       console.log("dietary");
//       console.log(dietary);
//       diateryList = dietary.map((e) => {
//         return <h6>{e}</h6>;
//       });
//     }
//       return (
//         <main>
//           <form>
//             <input
//               placeholder="First Name"
//               name="firstname"
//               onChange={(e) => this.onInputChange(e)}
//             />
//             <br />
//             <input
//               placeholder="Last Name"
//               name="lastname"
//               onChange={(e) => this.onInputChange(e)}
//             />
//             <br />
//             <input
//               name="age"
//               placeholder="Age"
//               onChange={(e) => this.onInputChange(e)}
//             />
//             <br />
//             <div onChange={this.onChangeValue}>
//               <input type="radio" value="Male" name="gender" /> Male
//               <input type="radio" value="Female" name="gender" /> Female <br />
//             </div>
//             {/* Create select box for location here */}
//             <select onChange={(e) => this.handleSelectChange(e)}>
//               <option>Location</option>
//               <option>Paris</option>
//               <option>NewYork</option>
//               <option>Japan</option>
//               <option>Spain</option>
//             </select>
//             <br />
//             {/* Create check boxes for dietary restrictions here. Like Vegan, Kosher, Halal, etc*/}
//             <input
//               type="checkbox"
//               name="dietary"
//               value="Vegan"
//               onChange={this.onChange}
//             />
//             <label>Halal</label>
//             <br />
//             <input
//               type="checkbox"
//               name="dietary"
//               value="Vegan"
//               onChange={this.onChange}
//             />
//             <label>Vegan</label>
//             <br />
//             <input
//               type="checkbox"
//               name="dietary"
//               value="Kosher"
//               onChange={this.onChange}
//             />
//             <label>Kosher</label>
//             <br />
  
//             <br />
//             <button>Submit</button>
//           </form>
//           <hr />
//           <h2>Entered information:</h2>
//           <p>Your name: {this.state.firstname + " " + this.state.lastname}</p>
//           <p>Your age: {this.state.age}</p>
//           <p>Your gender: {this.state.gender}</p>
//           <p>Your destination: {this.state.location}</p>
//           <p>
//             Your dietary restrictions:
//             {/* Dietary restrictions here, comma separated */}
//             {diateryList}
//           </p>
//         </main>
//       );
//     }
//   }
// export default App;

