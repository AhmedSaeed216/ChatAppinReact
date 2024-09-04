import { React, useState } from 'react'
import './App.css'
// font-awesome  for icons
import "font-awesome/css/font-awesome.css"
// sociket io client for client side connection
import { io } from "socket.io-client"
import Main from './components/Main'


function App() {

  return (
    <>
      <Main />
    </>
  )
}

export default App
