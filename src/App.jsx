import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  {createServer} from "http";
import { Server } from 'socket.io';
function App() {
  
const httpserver= createServer();
const io=new Server(httpServer,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"],
  }
})

io.on("connection",async(socket)=>{
  // socket events

})

httpServer.listen(process.env.PORT || 4000);




  return (
    <>
   
    </>
  )
}

export default App
