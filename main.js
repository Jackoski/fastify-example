require('dotenv').config();
const fastify = require('fastify')({ logger: true });

const router = require('./api');

// registering router
fastify.register(router, { prefix: '/' });

// SERVER_PORT env could be assigned to var to avoid repetition, but it will allocate memory
// and I want to avoid this unnecessary
fastify.listen(process.env.SERVER_PORT)
  .then(() => fastify.log.info('server is running on port: ' + process.env.SERVER_PORT))
  .catch(err => {
    fastify.log.error(err);
    process.exit(1);
  });
