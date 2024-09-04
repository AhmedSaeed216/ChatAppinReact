import React from 'react'

const Chat = ({user}) => {
  return (
    <div className='w-full  border-4 border-gray-400 '>
            <div className="row vh-95">
              <div className=' columns-lg  '>

                {/* chat header */}
                  <div className='py-2 px-4  w-full border drop-shadow-lg sticky bg-white rounded-lg'>
                    <div className='flex justify-start items-center py-1'>
                        <div className='relative '>
                            <img src="data:image/jpeg;base64,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" alt={user} 
                            className='rounded-lg w-10 h-10 '/>

                        </div>
                        <div className='flex '>
                         <strong>Logged in as : {user}</strong> 

                        </div>
                    </div>
                  </div>
              </div>
            </div>
            </div>
           
  )
}

export default Chat