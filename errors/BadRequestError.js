const { CODE_BAD_REQUEST_ERROR } = require('../utils/constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CODE_BAD_REQUEST_ERROR;
  }
}

module.exports = BadRequestError;
