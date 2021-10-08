"use strict";

// Read the .env file.
require("dotenv").config();

// Require the framework
const Fastify = require("fastify");

// Instantiate Fastify with some config
const app = Fastify({
  logger: true
});

// Register your application as a normal plugin.
app.register(require("../app.js"));

module.exports = async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};
