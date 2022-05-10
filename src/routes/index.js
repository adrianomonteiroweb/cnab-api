const routes = require("express").Router();

routes.get("/", (_req, res) => {
  res.status(200).json([{ message: "Cnab API" }]);
});

module.exports = routes;
