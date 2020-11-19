const express = require("express");

const server = express();
server.use(express.json());
server.use("/documents", require("./routes/documents"));

require('./services/database');

module.exports = server;