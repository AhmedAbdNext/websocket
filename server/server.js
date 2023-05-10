const WebSocket = require('ws');
/**
 * Web Socket Server Connection to prot 3050
 */
const server = new WebSocket.Server({ port: 3050});

/**
 * Web Socket Event Connection
 */
server.on('connection', (socket) => {
    
  console.log('New Connection');
  // Web Socket on message
  socket.on('message', (message) => {
    console.log(`New Message : ${message}`);
    socket.send(`You said: ${message}`);
  });
  // Web Socket on close
  socket.on("close", () => {
    console.log('Connection closed ');
  });
});
