const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const { MESSAGE_NOT_FOUND_ERROR_UPDATE_PROFILE } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
    }))
    .then((user) => res.send({
      email: user.email,
      name: user.name,
      _id: user._id,
    }))
    .catch((err) => {
      ValidationError(err, next);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret', { expiresIn: '7d' });
      return res.send({ token });
    })
    .catch(next);
};

module.exports.getUsersMe = (req, res, next) => {
  const id = req.user._id;

  return User.findById(id)
    .then((user) => {
      res.send({ data: user });
    })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { email, name } = req.body;
  const id = req.user._id;

  return User.findByIdAndUpdate(id, { email, name }, { new: true, runValidators: true })
    .then((user) => {
      if (user) { return res.send({ data: user }); }
      return next(new NotFoundError(MESSAGE_NOT_FOUND_ERROR_UPDATE_PROFILE));
    })
    .catch((err) => {
      ValidationError(err, next);
    });
};
