const mongoose = require('mongoose');
const {
  REGEX_URL,
  MESSAGE_FORMAT_URL_ERROR,
  MESSAGE_VALID_ERROR_MOVIE_COUNTRY,
  MESSAGE_VALID_ERROR_MOVIE_DIRECTOR,
  MESSAGE_VALID_ERROR_MOVIE_DURATION,
  MESSAGE_VALID_ERROR_MOVIE_YEAR,
  MESSAGE_VALID_ERROR_MOVIE_DESCRIPTION,
  MESSAGE_VALID_ERROR_MOVIE_IMAGE,
  MESSAGE_VALID_ERROR_MOVIE_TRAILER_LINK,
  MESSAGE_VALID_ERROR_MOVIE_THUMBNAIL,
  MESSAGE_VALID_ERROR_MOVIE_OWNER,
  MESSAGE_VALID_ERROR_MOVIE_MOVIE_ID,
  MESSAGE_VALID_ERROR_MOVIE_NAME_RU,
  MESSAGE_VALID_ERROR_MOVIE_NAME_EN,
} = require('../utils/constants');

mongoose.set('runValidators', true);

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_COUNTRY],
    },
    director: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_DIRECTOR],
    },
    duration: {
      type: Number,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_DURATION],
    },
    year: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_YEAR],
    },
    description: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_DESCRIPTION],
    },
    image: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_IMAGE],
      validate: {
        validator: (v) => REGEX_URL.test(v),
        message: MESSAGE_FORMAT_URL_ERROR,
      },
    },
    trailerLink: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_TRAILER_LINK],
      validate: {
        validator: (v) => REGEX_URL.test(v),
        message: MESSAGE_FORMAT_URL_ERROR,
      },
    },
    thumbnail: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_THUMBNAIL],
      validate: {
        validator: (v) => REGEX_URL.test(v),
        message: MESSAGE_FORMAT_URL_ERROR,
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, MESSAGE_VALID_ERROR_MOVIE_OWNER],
    },
    movieId: {
      type: Number,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_MOVIE_ID],
    },
    nameRU: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_NAME_RU],
    },
    nameEN: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_MOVIE_NAME_EN],
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
