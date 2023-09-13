const { CODE_UNAUTHORIZED_ERROR } = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CODE_UNAUTHORIZED_ERROR;
  }
}

module.exports = UnauthorizedError;
