// server.js (Node.js Backend)
const { createServer } = require('http');
const { Server } = require('socket.io');

// server method called
const httpServer = createServer();

// creating a new server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
});


// handling connection
io.on("connection", async (socket) => {
  console.log("A user connected");
  // Define socket events here

});

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
