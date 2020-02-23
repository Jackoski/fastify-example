createError = require('http-errors');

findPirate = require('./queries');

module.exports = function controller (req, res) {
  const pirate = findPirate(req.params.id);
  if (!pirate) res.send(createError(404, 'Pirate not found'));
  try {
    res.send({
      pirate: {
        ...pirate,
        // someAnotherFiled will be removed by serializer
      },
      someAnotherFiled: "1111",
    });
  } catch (error) {
    // error from serializer
    console.log(error);
    res.send(createError(400, error.message));
  };
};
