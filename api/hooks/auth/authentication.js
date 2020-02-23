module.exports = function (req, res, done) {
  // This hook will be always fired before handler...
  console.log("auth hook called!");
  done()
};
