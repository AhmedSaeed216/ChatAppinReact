import { React, useState } from 'react'
import './App.css'
// font-awesome  for icons
import "font-awesome/css/font-awesome.css"

// sociket io client for client side connection
import { io } from "socket.io-client"

import Login from './components/Login'
import Chat from './components/Chat'


function App() {
  const [newUser, setnewUser] = useState("")

  const [user, setUser] = useState("")

  const handleChange = (e) => {
    setnewUser(e.target.value);
    
    console.log(e);
  }

  const lognewUser = () => {
    setUser(newUser);
    console.log("new user nameis : "+newUser);
    // setnewUser("")
  }

  return (
    <>
      {/* username */}

      <main className='content '>
        <div className='constainer mt-3 '>
          {
            user && 
           <Chat user={user}/>    
          }

          {
            !user &&
            <Login newUser={newUser} handleChange={handleChange} lognewUser={lognewUser}/>
          }
        </div>
      </main>
    </>
  )
}

export default App
