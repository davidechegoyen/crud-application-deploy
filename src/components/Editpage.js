import './Signup.css'
import {useState} from 'react'
import Axios from 'axios'
const Editpage = ({editReqObj}) => {


    const [username, setUsername] = useState(editReqObj.userName)
    const [password, setPassword] = useState(editReqObj.password)
    const [firstName, setFirstName] = useState(editReqObj.firstName)
    const [lastName, setLastName] = useState(editReqObj.lastName)
    const [age, setAge] = useState(editReqObj.age)
    const [bias, setBias] = useState(editReqObj.bias)

    const editRequestSendHandler = () =>{    
    const edittedUserBody = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            age: age,
            bias:bias
        }   
    Axios.post(`https://crud-application1-heroku.herokuapp.com/update/${editReqObj.id}`,edittedUserBody)
            .then((response)=>console.log(`Message Sent`,response))            
            .catch((err)=>console.log(err))                   
    
    }


    return (
        <div className="signup-page">
            <div className="signup-page-content">
                <h1>Edit page</h1>
                
                <form className="inputs" >
                    <h3>Username: {username}</h3>
                    <h3>First Name: {firstName}</h3>
                    <h3>Last Name: {lastName}</h3>
                    <h3>Password: {password}</h3>
                    <h3>Age: {age}</h3>                    
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
                    <button onClick={editRequestSendHandler}>Submit</button>
                </form>            
            </div>
        </div>
    )
}

export default Editpage
