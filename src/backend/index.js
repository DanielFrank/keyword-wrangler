var Server = require('./server.js').Server;

var port = 4444;
var server = Server(port);

server.listen(function() {
  console.log("Server started and listening on port", server.options.port);
});
