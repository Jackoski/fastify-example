const fastify = require('config/server/server');

describe('#getManyPirates', () => {
  afterAll(() => {
    fastify.close();
  });

  describe('With valid params', () => {
    const expectedResult = [
      {
        id: '77ebf892-3991-4290-92ee-4d1834ef9a22',
        firstName: 'Jack',
        lastName: "Sparrow",
        ship: 'Black Peral',
        age: 50,
      },
      {
        id: 'b8d5c6ea-77ea-4de3-88bf-378adcf67706',
        firstName: 'Edward',
        lastName: "Blackbeard",
        ship: 'Queen Anne\'s Revenge',
        age: 40,
      },
      {
        id: 'c93355ac-9cc6-4c4b-9fd7-a80d1426245c',
        firstName: 'Hector',
        lastName: "Barbossa",
        ship: 'Flying Dutchman',
        age: 70,
      },
    ];

    test('should return all pirates from DB', async () => {
      await fastify.inject({
        method: 'GET',
        url: '/pirates',
      }, (err, response) => {
        expect(err).toBeNull();
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({
          pirates: expectedResult,
        });
      });
    });
  });
});
