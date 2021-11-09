import React, { Component } from "react";

function FormComponent(porps) {
  return (
    <form>
      <input
        type="text"
        value={porps.data.firstName}
        name="firstName"
        placeholder="First Name"
        onChange={porps.handleChange}
      />
      <br />
      <input
        type="text"
        value={porps.data.lastName}
        name="lastName"
        placeholder="Last Name"
        onChange={porps.handleChange}
      />
      <br />
      <input
        placeholder="Age"
        type="text"
        value={porps.data.age}
        name="age"
        onChange={porps.handleChange} />
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={porps.data.gender === "male"}
          onChange={porps.handleChange}
        />{" "}
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={porps.data.gender === "female"}
          onChange={porps.handleChange}
        />{" "}
        Female
      </label>
      {/* Create radio buttons for gender here */}
      <br />
      <label>Your Location:</label>
      <select
        value={porps.data.gLocation}
        onChange={porps.handleChange}
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
          checked={porps.data.kosher}
          onChange={porps.handleChange}
        />{" "}
        Kosher
      </label>
      <label>
        <input
          type="checkbox"
          name="Halal"
          checked={porps.data.Halal}
          onChange={porps.handleChange}
        />{" "}
        Halal
      </label>
      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={porps.data.vegan}
          onChange={porps.handleChange}
        />{" "}
        Vegan
      </label>
      {/* Create check boxes for dietary restrictions here. Like Vegan, Kosher, Halal, etc*/}
      <br />
      <button>Submit</button>

      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {porps.data.firstName} {porps.data.lastName}</p>
      <p>Your age: {porps.data.age}</p>
      <p>Your gender: {porps.data.gender}</p>
      <p>Your destination: {porps.data.gLocation}</p>
      <p>
        Your dietary restrictions:
      </p>
      <p id="Kosher">
      </p>
      <p id="Halal"></p>
      <p id="Vegan"></p>

    </form>
  )
}
export default FormComponent;