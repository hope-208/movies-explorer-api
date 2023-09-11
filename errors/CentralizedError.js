const { CODE_CENTRALIZED_ERROR, MESSAGE_CENTRALIZED_ERROR } = require('../utils/constants');

const CentralizedError = (err, req, res, next) => {
  const { statusCode = CODE_CENTRALIZED_ERROR, message } = err;
  res.status(statusCode).send({
    message: statusCode === CODE_CENTRALIZED_ERROR
      ? MESSAGE_CENTRALIZED_ERROR : message,
  });
  next();
};

module.exports = { CentralizedError };
