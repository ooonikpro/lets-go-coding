import runServer from './app/index.js';

runServer({
  host: process.env.HOST,
  port: process.env.PORT
});