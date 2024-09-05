import { React, useState } from 'react'
import './App.css'
// font-awesome  for icons
import "font-awesome/css/font-awesome.css"
// sociket io client for client side connection
import Main from './components/Main'

import { io } from "socket.io-client"


const socket = io("http://localhost:5000")
function App() {

  return (
    <>
      <Main socket={socket} />
    </>
  )
}

export default App
