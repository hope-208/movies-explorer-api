const { CODE_FORBIDDEN_ERROR } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CODE_FORBIDDEN_ERROR;
  }
}

module.exports = ForbiddenError;
