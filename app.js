const http = require('http');

const routes = require('./routes');

//create a http server
const server = http.createServer(routes.handler);

server.listen(3000);
