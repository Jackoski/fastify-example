getPirate = require('./getPirate/module');
getManyPirates = require('./getManyPirates/module');
hooks = require('../hooks');

module.exports = async (fastify) => {
  await fastify
    //   // path            // validation and serialization    // hooks=middlewares    //controller
    .get('/pirate/:id', { schema: getPirate.schema, preValidation: hooks.auth }, getPirate.controller)
    .get('/pirates', getManyPirates.controller);
};
