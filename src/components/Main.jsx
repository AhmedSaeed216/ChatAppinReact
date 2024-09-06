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
            const messageArr = users.map(({ userId, username }) => ({
                type: "UserStatus",
                userId,
                username,
            }));
            setMessages((prevMessages) => [...prevMessages, ...messageArr]); // Use previous state
            setusers(users);
            console.log(users); // showing which user has joined
        });
    
        socket.on("session", ({ userId, username }) => {
            setUser({ userId, username });
        });
    
        socket.on("new message", ({ userId, username, message }) => {
            const newMessage = {
                type: "message",
                userId: userId,
                username: username,
                message: message,
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]); // Correct state update
        });
    
        return () => {
            socket.off("users");
            socket.off("session");
            socket.off("new message");
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


    const sendMessage=()=>{
        socket.emit("new message",message);
        const newMessage={type:"message", userId:user.userId,username:user.username,message}
        setMessages([...messages,newMessage]);
        setMessage("");

    }
    return (
        <main className='content '>
            <div className='constainer mt-3 '>
                {
                    user.userId &&
                    <Chat user={user} sendMessage={sendMessage} message={message} messages={messages} setMessage={setMessage}/>
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