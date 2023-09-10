require('dotenv').config();

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');

const {
  requestLogger,
} = require('../middlewares/logger');

const NotFoundError = require('../errors/NotFoundError');

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    'https://mesto.hope-208.nomoreparties.co',
    'http://mesto.hope-208.nomoreparties.co',
    'https://api.mesto.hope-208.nomoreparties.co',
    'http://api.mesto.hope-208.nomoreparties.co',
    'http://localhost:3000',
    'http://localhost:4000',
  ],
  credentials: true,
}));

app.use(helmet());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Превышено количество запросов на сервер. Пожалуйста, попробуйте позднее.',
}));

app.use(requestLogger);

app.use('/', require('./users'));
app.use('/', require('./movies'));

app.use('*', (req, res, next) => {
  next(new NotFoundError('Страница по указанному маршруту не найдена.'));
});

module.exports = app;
