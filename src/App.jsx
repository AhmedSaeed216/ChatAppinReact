import { React, useState } from 'react'
import './App.css'
// font-awesome  for icons
import "font-awesome/css/font-awesome.css"

// sociket io client for client side connection
import { io } from "socket.io-client"
import NewUser from './components/NewUser'


function App() {
  const [newUser, setnewUser] = useState("")

  const [user, setUser] = useState("")

  const handleChange = (e) => {
    setnewUser(e.target.value);
    console.log(e);
  }

  const lognewUser = () => {
    setUser(newUser);
    console.log(newUser);
    // setnewUser("")
  }

  return (
    <>
      {/* username */}

      <main className='content '>
        <div className='constainer mt-3 '>
          {
            user && <div>
              Logged in as:  {user}

            </div>
          }

          {
            !user &&
            <NewUser newUser={newUser} handleChange={handleChange} lognewUser={lognewUser}/>
          }
        </div>
      </main>
    </>
  )
}

export default App
