const fastify = require('config/server/server');

describe('#getPirate', () => {
  afterAll(() => fastify.close());

  describe('With valid params', () => {
    const expectedResult = {
      id: '77ebf892-3991-4290-92ee-4d1834ef9a22',
      firstName: 'Jack',
      lastName: "Sparrow",
      ship: 'Black Peral',
      age: 50,
    };

    test('should return requested pirate', () => {
      return fastify.inject({
        method: 'GET',
        url: `/pirate/${expectedResult.id}`,
      }, (err, response) => {
        expect(err).toBeNull();
        expect(response.statusCode).toBe(200);
        expect(response.json()).toStrictEqual({ pirate: expectedResult });
      });
    });
  });

  describe('With invalid params', () => {
    describe('When id format is wrong', () => {
      const wrongId = 'wrong-uuid-format';

      test('should return BadRequest error', () => {
        return fastify.inject({
          method: 'GET',
          url: `/pirate/${wrongId}`,
        }, (err, response) => {
          expect(err).toBeNull();
          expect(response.statusCode).toBe(400);
          expect(response.json()).toStrictEqual({
            error: 'Bad Request',
            message: 'params.id should match format "uuid"',
            statusCode: 400,
          });
        });
      });
    });

    describe('When pirate with requested id isn\'t at DB', () => {
      const missingId = '77ebf892-3991-4290-92ee-4d1834ef9a21';

      test('should return NotFound error', () => {
        return fastify.inject({
          method: 'GET',
          url: `/pirate/${missingId}`,
        }, (err, response) => {
          expect(err).toBeNull();
          expect(response.statusCode).toBe(404);
          expect(response.json()).toStrictEqual({
            error: 'Not Found',
            message: 'Pirate not found',
            statusCode: 404,
          });
        });
      });
    });
  });
});
