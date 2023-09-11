const { CODE_CONFLICT_ERROR } = require('../utils/constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CODE_CONFLICT_ERROR;
  }
}

module.exports = ConflictError;
