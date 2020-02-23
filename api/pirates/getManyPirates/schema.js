module.exports = {
  response: {
    200: { // you can use string like '2xx' to cover more status codes if there might be more responses
      type: 'array',
      items: {
        type: 'object',
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
};
