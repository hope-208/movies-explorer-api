const router = require('express').Router();

const auth = require('../middlewares/auth');

const {
  celebrateCreateMovie,
  celebrateDeleteMovie,
} = require('../middlewares/celebrate');

const {
  getCurrentUserMoviesAll,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

// возвращает все сохранённые текущим пользователем фильмы
router.get('/movies', auth, getCurrentUserMoviesAll);

// создаёт фильм с переданными в теле country, director, duration, year,
// description, image, trailer, nameRU, nameEN и thumbnail, movieId
router.post('/movies', auth, celebrateCreateMovie, createMovie);

// удаляет сохранённый фильм по id
router.delete('/movies/:movieId', auth, celebrateDeleteMovie, deleteMovie);

module.exports = router;
