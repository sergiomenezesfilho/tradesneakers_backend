
const jsonServer = require('json-server');
const auth = require('json-server-auth')

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(port);

// Export the Server API
module.exports = server

