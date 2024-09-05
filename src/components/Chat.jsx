
import React ,{useState} from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

const Chat = ({ user,setMessage,message }) => {

    const [msg, setMsg] = useState("")
    return (
        <div className='w-full border-4 border-gray-400 '>
            <div className="row vh-95">
                <div className='flex flex-col h-full'>

                    {/* chat header */}
                    
                    <ChatHeader user={user}/>
                    {/* chat messages */}
                    
                    {/* <div className='flex-grow overflow-y-auto p-4'>
                        
                    </div> */}

                    {/* input */}
                    <ChatInput message={message} setMessage={setMessage}/>

                </div>
            </div>
        </div>
    );
}

export default Chat;
