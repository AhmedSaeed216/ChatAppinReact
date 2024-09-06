
import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ScrollableFeed from "react-scrollable-feed"


const Chat = ({ user, sendMessage, setMessage, message, messages }) => {

    const [msg, setMsg] = useState("")
    return (
        <div className='w-full border-4 border-gray-400 '>
            <div className="row vh-95">
                <div className='flex flex-col h-full chat-window'>
                    <ChatHeader user={user} />
                    <div className= ' chat-hreight relative overflow-auto '>
                        <ScrollableFeed>
                        <div className='p-4 flex flex-col '>
                                {messages.map((message,index)=>{
                                    return message.type==="UserStatus" ? 
                                    (<div key={index} className=' text-center'>
                                        <span className='bg-blue-40 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700  rounded-lg w-full px-2  '>{message.userId=== user.userId?"You have joined!":`${message.username} has joined`}</span>
                                    </div>):
                                    (<div key={index} className={message.userId===user.userId? "chat-message-right pb-4 ":"chat-message-left pb-4"}>

                                        <div>
                                            <img src="data:image/jpeg;base64,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"
                                             className='rounded-circle mr-1'
                                            alt={message.username}
                                            title={message.username}
                                            width="40"
                                            height="40" />
                                            <div className='  text-sm mt-2 text-nowrap '>
                                                12:00 AM
                                            </div>
                                        </div>
                                        <div className='flex flex-shrink bg-lime-200 rounded py-2 px-3 ml-3'>
                                            <div className='font-bold mb-1 '>
                                                {message.userId===user.userId?"You":message.username}
                                            </div>
                                            {message.message}

                                        </div>

                                    </div>)
                                    
                                })}

                        </div>
                        </ScrollableFeed>
                    </div>
                    <ChatInput message={message} sendMessage={sendMessage} setMessage={setMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Chat;
