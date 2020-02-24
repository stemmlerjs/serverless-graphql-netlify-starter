
const { createLambdaServer } = require('../src/server')

const server = createLambdaServer();

exports.handler = server.createHandler({
  cors: {
    origin: '*'
  }
});