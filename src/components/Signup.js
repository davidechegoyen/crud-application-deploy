import './Signup.css'
import { useState } from 'react'
import Axios from 'axios'

const Signup = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(0)
    


    const submitForm = () =>{       
        const newUser = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            age: age,            
        }       
        Axios.post("http://localhost:5000/add-user",newUser)
            .then((response)=>console.log(`Message Sent`,response))
            .catch((err)=>console.log(err))    
            console.log(newUser)   
            
        alert("Sign up successful!")

   }
   
    return (
        <div className="signup-page">
            <div className="signup-page-content">
                <h1>Sign up</h1>
                <form className="inputs" >
                    <div>
                        <label>Username:</label>
                        <input type="text" onChange={(e)=>setUsername(e.currentTarget.value)}></input>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="text" onChange={(e)=>setPassword(e.currentTarget.value)}></input>
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" onChange={(e)=>setFirstName(e.currentTarget.value)}></input>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" onChange={(e)=>setLastName(e.currentTarget.value)}></input>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" onChange={(e)=>setAge(e.currentTarget.value)}></input>
                    </div>                    
                    <button onClick={submitForm}>Submit</button>
                </form>              
                
            </div>
        </div>
    )
}

export default Signup
