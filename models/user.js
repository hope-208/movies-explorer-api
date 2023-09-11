const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { MESSAGE_FORMAT_EMAIL_ERROR, MESSAGE_UNAUTHORIZED_ERROR_UNCORRENT_DATA } = require('../utils/constants');

mongoose.set('runValidators', true);

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => isEmail(v),
        message: MESSAGE_FORMAT_EMAIL_ERROR,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
  },
  { versionKey: false },
);

userSchema.statics.findUserByCredentials = function validUserSchema(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(MESSAGE_UNAUTHORIZED_ERROR_UNCORRENT_DATA);
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError(MESSAGE_UNAUTHORIZED_ERROR_UNCORRENT_DATA);
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
