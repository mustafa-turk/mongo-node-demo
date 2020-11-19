const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.database.uri, config.database.options);

const { connection } = mongoose;

connection.on('open', () => {
  console.log('Connected to database');
});

module.exports = connection;