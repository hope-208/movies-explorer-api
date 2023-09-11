const mongoose = require('mongoose');
const { REGEX_URL, MESSAGE_FORMAT_URL_ERROR } = require('../utils/constants');

mongoose.set('runValidators', true);

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (v) => REGEX_URL.test(v),
        message: MESSAGE_FORMAT_URL_ERROR,
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: (v) => REGEX_URL.test(v),
        message: MESSAGE_FORMAT_URL_ERROR,
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: (v) => REGEX_URL.test(v),
        message: MESSAGE_FORMAT_URL_ERROR,
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('user', movieSchema);
