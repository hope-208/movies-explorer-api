const router = require('express').Router();

const {
  celebrateCreateUser,
  celebrateLogin,
  celebrateUpdateUser,
} = require('../middlewares/celebrate');

const {
  createUser,
  login,
  getUsersMe,
  updateUser,
} = require('../controllers/users');

const auth = require('../middlewares/auth');

// создаёт пользователя с переданными в теле email, password и name
router.post('/signup', celebrateCreateUser, createUser);
// проверяет переданные в теле почту и пароль и возвращает JWT
router.post('/signin', celebrateLogin, login);

// возвращает информацию о пользователе (email и имя)
router.get('/users/me', auth, getUsersMe);
// обновляет информацию о пользователе (email и имя)
router.patch('/users/me', auth, celebrateUpdateUser, updateUser);

module.exports = router;
