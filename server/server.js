const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3050});


server.on('connection', (socket) => {
    
  console.log('New Connection');

  socket.on('message', (message) => {
    console.log(`New Message : ${message}`);
    socket.send(`You said: ${message}`);
  });

  socket.on('close', () => {
    console.log('Connection closed ');
  });
});
