import { React, useState,useEffect } from 'react'

import Login from './Login'
import Chat from '../components/Chat.jsx'

const Main = ({socket}) => {

        



    const [newUser, setnewUser] = useState("")

    const [user, setUser] = useState({})
    const [users, setusers] = useState([])
    const [message, setMessage] = useState("")

    const [messages, setMessages] = useState([])

    
    useEffect(() => {
        socket.on("users", (users) => {
            const messageArr = [];
            for (const { userId, username } of users) {
                const newMessage = { type: "UserStatus", userId, username };
                messageArr.push(newMessage);
            }
            // setMessages((prevMessages) => [...prevMessages, ...messageArr]);
            setMessages([...messages,...messageArr])
            setusers(users);
            console.log(users); // showing which user has joined
        });
    
        socket.on("session", ({ userId, username }) => {
            setUser({ userId, username });
        });
    
        return () => {
            socket.off("users");
            socket.off("session");
        };
    }, [socket]);
    
    const handleChange = (e) => {
        setnewUser(e.target.value);

        // console.log(e);
    }

    const lognewUser = () => {
        // setUser(newUser);
        // console.log("new user nameis : " + newUser);
        socket.auth={username:newUser};
        socket.connect();
        // setnewUser("")
    }

    return (
        <main className='content '>
            <div className='constainer mt-3 '>
                {
                    user.userId &&
                    <Chat user={user} setMessage={setMessage} message={message} messages={messages}/>
                }

                {
                    !user.userId &&
                    <Login newUser={newUser} handleChange={handleChange} lognewUser={lognewUser} />
                }
            </div>
        </main>
    )
}

export default Main