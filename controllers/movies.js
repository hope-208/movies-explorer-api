const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const ValidationError = require('../errors/ValidationError');
const { MESSAGE_NOT_FOUND_ERROR_MOVIE_ID, MESSAGE_FORBIDDEN_ERROR_MOVIE } = require('../utils/constants');

module.exports.getCurrentUserMoviesAll = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movie) => res.send({ data: movie }))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  return Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => {
      movie
        .then(() => res.send({ data: movie }))
        .catch(next);
    })
    .catch((err) => {
      ValidationError(err, next);
    });
};

module.exports.deleteMovie = async (req, res, next) => {
  const id = req.params.movieId;
  const myId = req.user._id;
  try {
    const movie = await Movie.findByID(id);
    if (!movie) throw new NotFoundError(MESSAGE_NOT_FOUND_ERROR_MOVIE_ID);

    if (movie.owner.toString() !== myId) {
      throw new ForbiddenError(MESSAGE_FORBIDDEN_ERROR_MOVIE);
    }

    await movie.deleteOne();
    return res.send({ data: movie });
  } catch (err) {
    return next(err);
  }
};
