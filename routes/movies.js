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

router.get('/movies', auth, getCurrentUserMoviesAll);

router.post('/movies', auth, celebrateCreateMovie, createMovie);

router.delete('/movies/:movieId', auth, celebrateDeleteMovie, deleteMovie);

module.exports = router;
