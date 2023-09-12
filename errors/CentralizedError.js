const { CODE_CENTRALIZED_ERROR, MESSAGE_CENTRALIZED_ERROR } = require('../utils/constants');

const CentralizedError = (err, req, res, next) => {
  const statusCode = err.statusCode || CODE_CENTRALIZED_ERROR;
  const messageError = statusCode === CODE_CENTRALIZED_ERROR
    ? MESSAGE_CENTRALIZED_ERROR
    : err.message;

  return () => {
    res.status(statusCode).send({ message: messageError });
    next();
  };
};

module.exports = { CentralizedError };
