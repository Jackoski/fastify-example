module.exports = {
  params: {
    type: 'object',
    required: ['id'],
    additionalProperties: false,
    properties: {
      id: { type: 'string', format: "uuid" },
    },
  },
  response: {
    // you can use string like '2xx' to cover more status codes if there might be more responses
    200: {
      type: 'object',
      properties: {
        pirate: {
          properties: {
            id: { type: 'string' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            ship: { type: 'string' },
            age: { type: 'number' },
          },
        },
      },
    },
    // you can and more reposnses for more status codes
    // 404: {type: 'object', properties: {statusCode: {type: 'number'}}}
  },
};
