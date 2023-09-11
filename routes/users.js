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

router.post('/signup', celebrateCreateUser, createUser);
router.post('/signin', celebrateLogin, login);

router.get('/users/me', auth, getUsersMe);
router.patch('/users/me', auth, celebrateUpdateUser, updateUser);

module.exports = router;
