const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const ValidationError = require('../errors/ValidationError');

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

module.exports.deleteMovie = (req, res, next) => {
  const id = req.params.movieId;
  const myId = req.user._id;

  return Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        return next(new NotFoundError(`Фильм по указанному id ${id} не найден.`));
      }
      if (movie.owner.toString() !== myId) {
        return next(new ForbiddenError('Фильм создан другим пользователем. У вас нет прав на его удаление.'));
      }
      return movie.deleteOne()
        .then(() => res.send({ data: movie }))
        .catch(next);
    })
    .catch((err) => {
      ValidationError(err, next);
    });
};
