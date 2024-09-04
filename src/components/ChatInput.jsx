import React from 'react'

const ChatInput = ({message,setMessage}) => {
  return (
    <div className='input-field mt-auto'>
                        <div className='input-group flex w-full gap-3'>
                            <input 
                                type="text" 
                                name='message' 
                                placeholder='Message' 
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                className='flex-grow p-2 border border-gray-500 mt-2 rounded-xl' 
                            />
                            <button className='btn w-16 mt-3 border border-blue-950 rounded-xl bg-blue-500 hover:bg-blue-700 cursor-pointer'>
                                Send
                            </button>
                        </div>
                    </div>
  )
}

export default ChatInput    