const { CODE_NOT_FOUND_ERROR } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CODE_NOT_FOUND_ERROR;
  }
}

module.exports = NotFoundError;
