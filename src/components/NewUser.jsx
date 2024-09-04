import React,{useState} from 'react'

const NewUser = ({newUser,handleChange,lognewUser}) => {

    
  return (
    <div className='card w-full '>
              <div className="row">
                <div className="col-12">
                  <h5>Enter username</h5>
                </div>
                <div className=' flex justify-center items-center flex-col gap-5 '>
                  <input
                    type="text"
                    name='username'
                    value={newUser}
                    className='form-control  px-2 border border-black py-1 mt-2'
                    placeholder='Username'
                    autoComplete='off'
                    onChange={handleChange}
                    minLength={5}
                    onKeyDown={(e) => { e.code === "Enter" ? lognewUser() : null }}

                  />

                  <button
                    className='bg-blue-900 text-white w-28 rounded-lg  h-10  disabled:bg-slate-500 hover:bg-blue-500'
                    onClick={lognewUser}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
  )
}

export default NewUser
