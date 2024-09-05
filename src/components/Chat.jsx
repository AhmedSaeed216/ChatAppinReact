
import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
// import ScrollableFeed from "react-scrollable-feed"


const Chat = ({ user, setMessage, message, messages }) => {

    const [msg, setMsg] = useState("")
    return (
        <div className='w-full border-4 border-gray-400 '>
            <div className="row vh-95">
                <div className='flex flex-col h-full'>
                    <ChatHeader user={user} />
                    <div className= ' chat-hreight relative overflow-auto '>
                        <div className='p-4 flex flex-col '>
                                {messages.map((message,index)=>{
                                    return message.type==="UserStatus" ? 
                                    (<div key={index} className=' text-center'>
                                        <span className='bg-blue-40 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700  rounded-lg w-full px-2  '>{message.userId=== user.userId?"You have joined!":`${message.username} has joined`}</span>
                                    </div>):null
                                })}

                        </div>
                    </div>
                    <ChatInput message={message} setMessage={setMessage} />
                </div>
            </div>
        </div>
    );
}

export default Chat;
