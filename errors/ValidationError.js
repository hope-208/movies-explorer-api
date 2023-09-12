const mongoose = require('mongoose');
const BadRequestError = require('./BadRequestError');
const ConflictError = require('./ConflictError');
const CentralizedError = require('./CentralizedError');

const {
  MESSAGE_BAD_REQUEST_ERROR_UNCORRENT_DATA,
  MESSAGE_BAD_REQUEST_ERROR_UNCORRENT_ID,
  MESSAGE_CONFLICT_ERROR_DUPLICATE_EMAIL,
} = require('../utils/constants');

const ValidationError = (err, next) => {
  if (err instanceof mongoose.Error.ValidationError || err.name === 'ValidationError') {
    return next(new BadRequestError(MESSAGE_BAD_REQUEST_ERROR_UNCORRENT_DATA));
  } if (err instanceof mongoose.Error.CastError || err.name === 'CastError') {
    return next(new BadRequestError(MESSAGE_BAD_REQUEST_ERROR_UNCORRENT_ID));
  } if (err.code === 11000) {
    return next(new ConflictError(MESSAGE_CONFLICT_ERROR_DUPLICATE_EMAIL));
  } return next(new CentralizedError(err));
};

module.exports = ValidationError;
