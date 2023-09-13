require('dotenv').config();

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('../ratelimit');

const {
  requestLogger,
} = require('../middlewares/logger');

const NotFoundError = require('../errors/NotFoundError');

const { MESSAGE_NOT_FOUND_ERROR_PAGE } = require('../utils/constants');

const { CORS_ALLOWED } = process.env;

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: CORS_ALLOWED,
  credentials: true,
}));

app.use(helmet());

app.use(rateLimit);

app.use(requestLogger);

app.use('/', require('./users'));
app.use('/', require('./movies'));

app.use('*', (req, res, next) => {
  next(new NotFoundError(MESSAGE_NOT_FOUND_ERROR_PAGE));
});

module.exports = app;
