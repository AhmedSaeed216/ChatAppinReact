import {React,useState} from 'react'

import Login from './Login'
import Chat from './Chat'

const Main = () => {
    const [newUser, setnewUser] = useState("")

  const [user, setUser] = useState("")

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setnewUser(e.target.value);

    console.log(e);
  }

  const lognewUser = () => {
    setUser(newUser);
    console.log("new user nameis : " + newUser);
    // setnewUser("")
  }

  return (
    <main className='content '>
        <div className='constainer mt-3 '>
          {
            user &&
            <Chat user={user} setMessage={setMessage} message={message} />
          }

          {
            !user &&
            <Login newUser={newUser} handleChange={handleChange} lognewUser={lognewUser} />
          }
        </div>
      </main>
  )
}

export default Main