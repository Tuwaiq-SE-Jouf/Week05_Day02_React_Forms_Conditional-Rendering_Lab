import React from "react"

    function FormComponant(props) {

        return(
            <main>
         <form>   
        <input
        type="text"
        value={props.data.firstName}
        name="firstName"
        placeholder="First Name"
        onChange={props.handleChange}
      />
      <br />
      <input
        type="text"
        value={props.data.lastName}
        name="lastName"
        placeholder="Last Name"
        onChange={props.handleChange}
      />
        <br />
        <input 
         type="text"
         value={props.data.age}
         name="age"
         onChange={props.handleChange}
         placeholder="Age" />
        <br />
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
        <br />
        <label>location:</label>
      <select
        value={props.data.locat}
        onChange={props.handleChange}
        name="locat"
      >
        <option value="select color">Please select a location</option>
        <option value="aljuof">aljuof</option>
        <option value="Arar">Arar</option>
        <option value="Hail">Hail</option>
      </select>
        <br />
        <label>
        <input
          type="checkbox"
          name="kosher"
          checked={props.data.kosher}
          onChange={props.handleChange}
        />{" "}
          Kosher
      </label>
      <label>
        <input
          type="checkbox"
          name="Halal"
          checked={props.data.Halal}
          onChange={props.handleChange}
        />{" "}
          Halal
      </label>
      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={props.data.vegan}
          onChange={props.handleChange}
        />{" "}
          Vegan
      </label>
        <br />
        <br/>
        <button type="button" onClick={props.handleChange}>Submit</button>
      </form>

      <hr />
      <h2>Entered information:</h2>

      <p>Your name: {props.data.firstName} {props.data.lastName}</p>

      <p>Your age: {props.data.age}</p>

      <p>Your gender: {props.data.gender}</p>

      <p>Your destination: {props.data.locat}</p>
      <p>
        Your dietary restrictions:
          {props.data.dietary}
      </p>
      </main>
        );
        }
    


export default FormComponant