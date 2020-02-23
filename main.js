fastify = require('./config/server/server');

fastify.listen(process.env.SERVER_PORT)
  .catch(err => {
    fastify.log.error(err);
    process.exit(1);
  });
