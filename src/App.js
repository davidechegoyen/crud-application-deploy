import './App.css';
import {BrowserRouter as Router , Switch as Switcher, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Userspage from './components/Userspage';
import Editpage from './components/Editpage';

function App() {

  const [users, setUsers] = useState([])
  const [editReqObj, seteditReqObj] = useState("")

  useEffect(() => {
    Axios.get(`https://crud-application1-heroku.herokuapp.com/all-users`)
      .then((response)=>setUsers(response.data))
      .catch((err)=>console.log(err))
  }, [])
  
  const editPage= (userObj)=>{
    seteditReqObj(userObj)    
  } 
 
  return (
    <Router basename="/crud-application-deploy">      
        <Navbar />  
        <Switcher>
          <Route exact path="/">
            <Homepage users={users}/>
          </Route>       
          <Route path="/users">
            <Userspage users={users} editPage={editPage} />
          </Route>   
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route>
            <Editpage editReqObj={editReqObj}/>
          </Route>        
        </Switcher>          
    </Router>
  );
}

export default App;
