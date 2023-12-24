import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

/**
 * 
 * @param {string} [config.host] - адрес сервера
 * @param {string} [config.port] - порт сервера
 */
const runServer = ({ host = 'localhost', port = 3000 } = {}) => {
  // io.on('connection', (socket) => {
  //   console.log('a user connected');
  // });
  
  server.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
  });
}

export default runServer;