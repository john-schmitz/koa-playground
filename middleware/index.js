const logger = require("./request-logger");
const error = require("./error");
const bodyParser = require("./body-parser");

module.exports = [error, logger, bodyParser];
