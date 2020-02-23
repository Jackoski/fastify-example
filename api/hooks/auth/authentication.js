module.exports = async function (req, res) {
  await console.log(req.params);
  // This hook will always be executed after the shared `preValidation` hooks
  await console.log("auth hook called!");
  return;
};
