import React from "react";


function FormComponent(props){
return (
<form>
  <input
    type="text"
    value={props.date.firstName}
    name="firstName"
    placeholder="First Name"
    onChange={props.handleChange}
    />
  <br />
  <input
   type="text"
   value={props.date.lastName}
   name="lastName"
   placeholder="Last Name"
   onChange={props.handleChange}
   />
  <br />
  <input
  placeholder="Age"
  type="text"
  value={props.date.age}
  name="age"
  onChange={props.handleChange}/>
  <br />
  <label>
  <input
    type="radio"
    name="gender"
    value="male"
    checked={props.date.gender === "male"}
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
    checked={props.date.gender === "female"}
    onChange={props.handleChange}
  />{" "}
  Female
</label>
  {/* Create radio buttons for gender here */}
  <br />
  <label>Your Location:</label>
<select
  value={props.date.gLocation}
  onChange={props.handleChange}
  name="gLocation"
>
<option value="select Location"> select your location :</option>
          <option value="skakah ">skakah </option>
          <option value="khobar">khobar</option>
          <option value="Riyadh">Riyadh</option>
          <option value="Jeddah">Jeddah</option>
          <option value="Abha">Abha</option>
</select>
  {/* Create select box for location here */}
  <br />
  <label>
  <input
    type="checkbox"
    name="kosher"
    checked={props.date.kosher}
    onChange={props.handleChange}
  />{" "}
    Kosher
</label>
<label>
  <input
    type="checkbox"
    name="Halal"
    checked={props.date.Halal}
    onChange={props.handleChange}
  />{" "}
    Halal
</label>
<label>
  <input
    type="checkbox"
    name="vegan"
    checked={props.date.vegan}
    onChange={props.handleChange}
  />{" "}
    Vegan
</label>
  {/* Create check boxes for dietary restrictions here. Like Vegan, Kosher, Halal, etc*/}
  <br />
  <button type="button" onClick={props.handleClick}>Submit</button>

<hr />
<h2>Entered information:</h2>
<p>Your name: {props.date.firstName} {props.date.lastName}</p>
<p>Your age: {props.date.age}</p>
<p>Your gender: {props.date.gender}</p>
<p>Your destination: {props.date.gLocation}</p>

  Your dietary restrictions:

<p id="Kosher">
</p>
<p id="Halal"></p>
<p id="Vegan"></p>
</form>
);
}



export default FormComponent;