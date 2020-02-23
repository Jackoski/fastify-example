pirateRouter = require('./pirates/router');

module.exports = async (fastify) => {
  await fastify.register(pirateRouter)
  // here will be more registered routes like example below:
  // await fastify.register(shipsRouter);
};
