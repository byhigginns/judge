const { PeerServer } = require('peer');

const PORT = process.env.PORT || 9000;

const server = PeerServer({
  port: PORT,
  path: '/',
  allow_discovery: true,
});

server.on('connection', (client) => {
  console.log('Peer connected:', client.getId());
});

server.on('disconnect', (client) => {
  console.log('Peer disconnected:', client.getId());
});

console.log(`PeerJS signaling server running on port ${PORT}`);
