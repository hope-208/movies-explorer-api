const { CODE_CENTRALIZED_ERROR, MESSAGE_CENTRALIZED_ERROR } = require('../utils/constants');

const CentralizedError = (err, req, res, next) => {
  const statusCode = err.statusCode || CODE_CENTRALIZED_ERROR;
  const messageError = statusCode === CODE_CENTRALIZED_ERROR
    ? MESSAGE_CENTRALIZED_ERROR
    : err.message;
  res.status(statusCode).send({
    message: messageError,
  });
  return next();
};

module.exports = { CentralizedError };
