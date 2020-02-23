function handler (req, res) {
  console.log(req.query)
  res.send({
    hello: 'world',
    anotherHello: 'Hello!',
  });
}

module.exports = async (fastify) => {
  await fastify.get('/hello', {
    schema: {
      query: {
        type: 'object',
        required: ['name'],
        max: 1,
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
        },

      },
      response: {
        200: { // you can se string like '2xx' to cover more status codes if there might be more responses
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
      },
    },
    preValidation: async function (req, res) {
      // This hook will always be executed after the shared `preValidation` hooks
      await console.log("hook called wih name: " + req.query.name)
    },
  }, handler)
};

