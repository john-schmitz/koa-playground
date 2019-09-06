const logger = require("koa-logger");
const config = require("../config");
module.exports = app => {
  if (config.env === "development") app.use(logger());
};
