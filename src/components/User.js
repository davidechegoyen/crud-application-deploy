import { Link } from 'react-router-dom'
import Axios from 'axios'

const User = ({userName,firstName,lastName,age,bias,id,editPage}) => {

    const deleteUserHandler = ()=>{
        
        Axios.delete(`http://localhost:5000/delete/${id}`)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))  
        window.location.reload()
    }

    const editPageHandler = ()=>{
        const userObj = {
            userName:userName,
            firstName:firstName,
            lastName:lastName,
            age:age,            
            id:id
        }
        editPage(userObj)
    }

    return (
        <div className="usercard">
            <div className="usercard-content">               
                <p>Username: <strong>{userName}</strong></p>
                <p>Hi I'm: <strong>{firstName} {lastName}</strong></p>
                <p>I'm {age} years old</p>                
            </div>           
            <div>
                <button className="btns" onClick={deleteUserHandler}>
                    <i className="fas fa-times fa-1x"></i>
                </button>                
                <button className="btns">
                    <Link className="blacklink" to={`/edit-page/${id}`} onClick={editPageHandler}><i className="fas fa-edit fa-1x"></i></Link>
                </button>
            </div>
            
        </div>
    )
}

export default User
