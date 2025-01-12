const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 5555;
const HOST = process.env.HOST || '127.0.0.1';

const httpServer = http.createServer(app);

httpServer.listen(PORT, HOST, () =>
  console.log(`Server is listening http://${HOST}:${PORT}`)
);
