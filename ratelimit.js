const rateLimit = require('express-rate-limit');

const { WINDOW_MS_RATE_LIMIT, MAX_RATE_LIMIT, MESSAGE_RATE_LIMIT } = process.env;

module.exports = rateLimit({
  windowMs: WINDOW_MS_RATE_LIMIT,
  max: MAX_RATE_LIMIT,
  message: MESSAGE_RATE_LIMIT,
});
