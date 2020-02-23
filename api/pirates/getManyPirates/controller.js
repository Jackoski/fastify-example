findManyPirates = require('./queries');

module.exports = function controller (req, res) {
  const pirates = findManyPirates();

  res.send({
    pirates,
  });
};
