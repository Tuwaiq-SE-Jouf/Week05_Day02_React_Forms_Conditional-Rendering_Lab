import React from "react"

function FormComponent(props) {
    return (
        <main style={{background:"pink"}}>
            <form >
                <input 
                    type="text"
                    name="firstName" 
                    value={props.data.firstName} 
                    onChange={props.handleChange} 
                    placeholder="First Name" 
                />
                <br />
                
                <input 
                    type="text"
                    name="lastName" 
                    value={props.data.lastName}
                    onChange={props.handleChange} 
                    placeholder="Last Name" 
                />
                <br />
                
                <input 
                  type="text"
                    name="age" 
                    value={props.data.age}
                    onChange={props.handleChange} 
                    placeholder="Age" 
                />
                <br />
                
                <label>
                    <input 
                    
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                
                <br />
                
                <select 
                    value={props.data.destination} 
                    name="destination" 
                    onChange={props.handleChange}
                >
                    <option value="">--your location:  --</option>
                    <option value="Sakak">Sakakh</option>
                    <option value="domatAljandal">domatAljandal </option>
                    <option value="Aladari">Aladari</option>
                    <option value="Qurayyat">Qurayyat</option>
                </select>
                
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> Vegan?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> Kosher?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br />
                
                <button style={{background:"ashen"}}>Submit</button>
            </form>
            <hr />
            <h2 style={{fontFamily:"fantasy"}}>Entered information:</h2>
            <p style={{fontFamily:"fantasy"}}>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p style={{fontFamily:"fantasy"}}>Your age: {props.data.age}</p>
            <p style={{fontFamily:"fantasy"}} >Your gender: {props.data.gender}</p>
            <p style={{fontFamily:"fantasy"}} >Your destination: {props.data.destination}</p>
            <p style={{fontFamily:"fantasy"}}>Your dietary restrictions:</p>
            
            <p style={{fontFamily:"fantasy"}}>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p style={{fontFamily:"fantasy"}} >Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p style={{fontFamily:"fantasy"}} >Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
            
        </main>
    )
}

export default FormComponent;