const server = require("./server");
const config = require("./config");

server.listen(config.server.port, () => {
  console.log(`Server started at localhost:${config.server.port}`);
});