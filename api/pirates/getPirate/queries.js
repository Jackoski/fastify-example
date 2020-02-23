db = require('config/db/data');

module.exports = (id) => db.pirates.find(pirate => pirate.id === id && pirate);
