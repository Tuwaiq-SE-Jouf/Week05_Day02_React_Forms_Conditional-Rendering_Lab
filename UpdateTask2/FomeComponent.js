import React from "react";

function FomeComponent(props)
{
    return (<div>
        <form >
          <input
            type="text"
            value={props.data.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={props.handleChange}
          />
          <br /><br />
          <input
            type="text"
            value={props.data.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={props.handleChange}
          />
          <br /><br />
          <input
            type="text"
            value={props.data.ageUser}
            name="ageUser"
            placeholder="Your Age"
            onChange={props.handleChange}
          />
          <br /><br />
       
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
        
          <br /><br />
          
          
         
          <label>
       
            <hr />
          <h2>Entered information:</h2>
          <p>Your name:  {props.data.firstName} {props.data.lastName} </p>
          <p>Your age: {props.data.ageUser}</p>
          <p>Your gender: {props.data.gender}</p>
  
          <label>Your Location :</label>
          <select
            value={props.data.location}
            onChange={props.handleChange}
            name="location"
          >
            <option value="select color">Please select your location :</option>
            <option value="domataljandal ">Domat al Jandal </option>
            <option value="dammam">Dammam</option>
            <option value="abha">Abha</option>
            <option value="mecca">Mecca</option>
            <option value="jubail">Jubail</option>
          
          </select>
          
          <p>
          Your dietary Restrictions :
          <br />
            <input
              type="checkbox"
              name="vegan"
              checked={props.data.vegan}
              onChange={props.handleChange}
            />{" "} Vegan 
            <br />
               <input
              type="checkbox"
              name="kosher"
              checked={props.data.kosher}
              onChange={props.handleChange}
            />{" "} Kosher
            <br />
               <input
              type="checkbox"
              name="halal"
              checked={props.data.halal}
              onChange={props.handleChange}
            />{" "} Halal
            <hr />
          </p>
         <p> your Dietary Restrictions :</p>
          <p id="dietaryRestrictions"> </p>
         
  
          </label>
          <br /><br />
          <button type="button" onClick={props.handelClick}> Submit</button>
        </form>
        </div>
      );
}

export default FomeComponent;