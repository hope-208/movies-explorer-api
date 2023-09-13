require('dotenv').config();

const mongoose = require('mongoose');

const { errors } = require('celebrate');

const {
  errorLogger,
} = require('./middlewares/logger');

const { CentralizedError } = require('./errors/CentralizedError');

const { PORT = 3000, DB_ADDRESS } = process.env;

const app = require('./routes/index');

mongoose.connect(DB_ADDRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(errorLogger);

app.use(errors());

app.use(CentralizedError);

app.listen(PORT);
