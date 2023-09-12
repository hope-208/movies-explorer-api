const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const UnauthorizedError = require('../errors/UnauthorizedError');

const {
  MESSAGE_FORMAT_EMAIL_ERROR,
  MESSAGE_UNAUTHORIZED_ERROR_UNCORRENT_DATA,
  MESSAGE_VALID_ERROR_USER_EMAIL,
  MESSAGE_VALID_ERROR_USER_NAME,
  MESSAGE_VALID_ERROR_USER_NAME_MINLENGTH,
  MESSAGE_VALID_ERROR_USER_NAME_MAXLENGTH,
  MESSAGE_VALID_ERROR_USER_PASSWORD,
} = require('../utils/constants');

mongoose.set('runValidators', true);

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_USER_EMAIL],
      unique: true,
      validate: {
        validator: (v) => isEmail(v),
        message: MESSAGE_FORMAT_EMAIL_ERROR,
      },
    },
    password: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_USER_NAME],
      select: false,
    },
    name: {
      type: String,
      required: [true, MESSAGE_VALID_ERROR_USER_PASSWORD],
      minlength: [2, MESSAGE_VALID_ERROR_USER_NAME_MINLENGTH],
      maxlength: [30, MESSAGE_VALID_ERROR_USER_NAME_MAXLENGTH],
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
