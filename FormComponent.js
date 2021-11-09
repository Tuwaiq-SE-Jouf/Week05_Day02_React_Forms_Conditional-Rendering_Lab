import React, { Component } from "react";

function FormComponent(props){


    return (
      <main>
        <form>
          <input 
          placeholder="First Name"
          name="firstName"
          value ={props.data.firstName} 
          onChange={props.handleChange}/>

          <br />

          <input placeholder="Last Name"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange} />

          <br />

          <input placeholder="Age"
          name="age"
          value={props.data.age} 
          onChange={props.handleChange}/>

          <br/> <hr/>

          <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>

          <br/> <hr/>
          <label> dietary restrictions : </label>
          <select
          value={props.data.dietaryRes}
          onChange={props.handleChange}
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
            checked={props.data.location}
            onChange={props.handleChange}/> 
            {""} location </label>

            <br/> <br/>

           <button>Submit</button>
         
    
    <hr /> <hr />

    <h2>Entered information:</h2>
    <p>Your name:{props.data.firstName} {props.data.lastName}</p>
    <p>Your age: {props.data.age}</p>
    <p>Your gender: {props.data.gender}</p>
    <p>Your destination: {props.data.location}</p>
    <p>
      Your dietary restrictions:
      {props.data.dietaryRes}
    </p> 
    
     

        </form>

      </main>
    );
  }

export default FormComponent;