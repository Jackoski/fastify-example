// create custom path
require('module-alias/register');
// load env vars
require('dotenv').config();
const fastify = require('fastify')({ logger: true });

const router = require('api/router');

// registering router
fastify.register(router, { prefix: '/' });

module.exports = fastify;
