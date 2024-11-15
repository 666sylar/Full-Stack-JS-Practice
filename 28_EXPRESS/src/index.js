const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(5555, () => {
  console.log(`Server is listening port 5555`);
});
