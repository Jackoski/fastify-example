userRouter = require('./pirates/router');

module.exports = async (fastify) => {
  await fastify.register(userRouter);
};
