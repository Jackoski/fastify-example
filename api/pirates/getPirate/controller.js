createError = require('http-errors');

findPirate = require('./queries');

module.exports = function controller (req, res) {
  const pirate = findPirate(req.params.id);
  if (!pirate) res.send(createError(404, 'Pirate not found'));

  res.send({
    pirate: {
      ...pirate,
      // someAnotherFiled will be removed by serializer
      someAnotherFiled: "Will not be send because serializer will remove it",
    },
  });
};
