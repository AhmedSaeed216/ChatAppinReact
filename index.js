// // server.js (Node.js Backend)
// const { createServer } = require('http');
// const { Server } = require('socket.io');

// // server method called
// const httpServer = createServer();

// import {v4 as uuidv4}  from "uuid"
// // creating a new server
// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   }
// });

// io.use((socket,next)=>{
//   const username= socket.handshake.auth.username; //this will bring username fro  client side
//   if(!username){
//     return next(new Error("Invalid username"));
//   }

//   socket.username=username,
//   socket.userId= uuidv4();
//   next();
// })

// // handling connection
// io.on("connection", async (socket) => {
//   console.log("A user connected");
//   // Define socket events here

//   socket.emit("session",{userId:socket.userId,username:socket.username})


// });

// const PORT = process.env.PORT || 5000;
// httpServer.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });


import { createServer } from 'http';
import { Server } from 'socket.io';
import { v4 as uuidv4 } from 'uuid'; // Use ES module syntax for uuid import

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Ensure this matches your React app's port
    methods: ["GET", "POST"],
  }
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("Invalid username"));
  }

  socket.username = username;
  socket.userId = uuidv4();
  next();
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Emit the session data to the client
  socket.emit("session", { userId: socket.userId, username: socket.username });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
