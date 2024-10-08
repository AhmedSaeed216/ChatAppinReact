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
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userId: id,
      username: socket.username
    }
    )

  }

  //all users event
  socket.emit("users",users)  


  // Emit the session data to the client
  socket.emit("session", { userId: socket.userId, username: socket.username });

  // send message
  socket.on("new message",(message)=>{
      socket.broadcast.emit("new message",{
        userId: socket.userId,
        username:socket.username,
        message

      })
  })
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
