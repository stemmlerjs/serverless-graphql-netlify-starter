
const { createLocalServer } = require("./server")

const server = createLocalServer();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});