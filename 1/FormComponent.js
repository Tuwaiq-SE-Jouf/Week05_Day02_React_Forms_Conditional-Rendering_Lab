import React from "react";


function FormComponent(Props){
    return (
        <main>
          <form>
            <input
              type="text"
              value={Props.information.firstName}
              name="firstName"
              placeholder='First Name'
              onChange={Props.handleChange}
              />
            <br />
            <input
             type="text"
             value={Props.information.lastName}
             name="lastName"
             placeholder='Last Name'
             onChange={Props.handleChange}
             />
            <br />
            <input
            placeholder="Age"
            type="text"
            value={Props.information.age}
            name="age"
            onChange={Props.handleChange}/>
            <br />
            <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={Props.information.gender === "male"}
              onChange={Props.handleChange}
            />{" "}
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={Props.information.gender === "female"}
              onChange={Props.handleChange}
            />{" "}
            Female
          </label>
            {/* Create radio buttons for gender here */}
            <br />
            <label>Your Location:</label>
          <select
            value={Props.information.gLocation}
            onChange={Props.handleChange}
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
              checked={Props.information.kosher}
              onChange={Props.handleChange}
            />{" "}
              Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="Halal"
              checked={Props.information.Halal}
              onChange={Props.handleChange}
            />{" "}
              Halal
          </label>
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={Props.information.vegan}
              onChange={Props.handleChange}
            />{" "}
              Vegan
          </label>
            {/* Create check boxes for dietary restrictions here. Like Vegan, Kosher, Halal, etc*/}
            <br />
            <button type="button " onClick={Props.handleClick}>Submit</button>
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>Your name: {Props.information.firstName} {Props.information.lastName}</p>
          <p>Your age: {Props.information.age}</p>
          <p>Your gender: {Props.information.gender}</p>
          <p>Your destination: {Props.information.gLocation}</p>
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




export default FormComponent