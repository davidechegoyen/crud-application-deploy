import { Link } from "react-router-dom"
import { useState } from 'react'

import "./Navbar.css"

const Navbar = () => {

    const [barsState, setBarsState] = useState(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    
    const updateSize = ()=>{
        setWindowSize(window.innerWidth)
        setBarsState(false)
    }

    window.addEventListener('resize',updateSize)

    const setBarsStateHandler=()=>setBarsState(!barsState)

    if(windowSize <=500){
        return (
            <div className="navigation-bar">
                <div className="navigation-bar-content">
                    <div><h1><strong><Link to="/crud-application-deploy" className="blacklink">CRUD</Link></strong></h1></div>
                    <button onClick={setBarsStateHandler}>{barsState?<i className="fas fa-times fa-3x"></i>:<i className="fas fa-bars fa-3x"></i>}</button>
                </div>        
                <div className={barsState?"dropdown-yes":"dropdown-no"}>
                    <ul className="navlink-list">
                        
                        <li><Link to="/users" className="blacklink">users</Link></li>
                        <li><Link to="/sign-up" className="blacklink">sign-up</Link></li>
                    </ul>
                </div>    
            </div>
        )
    }
    else{
         return (
            <div className="navigation-bar">
                <div className="navigation-bar-content">
                    <div><h1><strong><Link to="/crud-application-deploy" className="blacklink">CRUD</Link></strong></h1></div>
                    <ul className="navlink-list">
                        
                        <li><Link to="/users" className="blacklink">users</Link></li>
                        <li><Link to="/sign-up" className="blacklink">sign-up</Link></li>
                    </ul>
                </div>            
            </div>
        )
    }
   
}

export default Navbar
