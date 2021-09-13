import React from 'react'
import User from './User'

import './Userspage.css'

const Userspage = ({users, editPage}) => {
    return (
        <div className="userspage">
            <div className="content-wrapper">
                <h1>Users</h1>
                <div className="userspage-content">                
                    {users.map((currUser,key)=>{
                        return <User 
                            userName = {currUser.username}
                            firstName = {currUser.firstName}
                            lastName = {currUser.lastName}
                            age = {currUser.age}
                            bias = {currUser.bias}
                            id={currUser._id} 
                            editPage={editPage}                           
                            key ={key}/>
                    })}
                </div>
            </div>            
        </div>
    )
}

export default Userspage
