const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const UnauthorizedError = require('../errors/UnauthorizedError');
const { MESSAGE_UNAUTHORIZED_ERROR } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError(MESSAGE_UNAUTHORIZED_ERROR));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret');
  } catch (err) {
    return next(new UnauthorizedError(MESSAGE_UNAUTHORIZED_ERROR));
  }

  req.user = payload;

  return next();
};
