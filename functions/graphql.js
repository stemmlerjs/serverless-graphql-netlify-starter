
const { createLambdaServer } = require('./bundle/server')

const server = createLambdaServer();

exports.handler = server.createHandler({
  cors: {
    origin: '*'
  }
});