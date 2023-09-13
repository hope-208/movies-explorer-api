const REGEX_URL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/;

const CODE_BAD_REQUEST_ERROR = 400;
const CODE_UNAUTHORIZED_ERROR = 401;
const CODE_FORBIDDEN_ERROR = 403;
const CODE_NOT_FOUND_ERROR = 404;
const CODE_CONFLICT_ERROR = 409;
const CODE_CENTRALIZED_ERROR = 500;

const MESSAGE_BAD_REQUEST_ERROR_UNCORRENT_DATA = 'Переданы некорректные данные.';
const MESSAGE_BAD_REQUEST_ERROR_UNCORRENT_ID = 'Передан некорректный id.';

const MESSAGE_UNAUTHORIZED_ERROR_UNCORRENT_DATA = 'Вы ввели неправильный логин или пароль.';
const MESSAGE_UNAUTHORIZED_ERROR = 'Необходима авторизация.';

const MESSAGE_FORBIDDEN_ERROR_MOVIE = 'Фильм создан другим пользователем. У вас нет прав на его удаление.';

const MESSAGE_NOT_FOUND_ERROR_MOVIE_ID = 'Фильм по указанному ID не найден.';
const MESSAGE_NOT_FOUND_ERROR_UPDATE_PROFILE = 'При обновлении профиля произошла ошибка.';
const MESSAGE_NOT_FOUND_ERROR_PAGE = 'Страница по указанному маршруту не найдена.';

const MESSAGE_CONFLICT_ERROR_DUPLICATE_EMAIL = 'Пользователь с таким уже Email существует.';

const MESSAGE_CENTRALIZED_ERROR = 'На сервере произошла ошибка.';

const MESSAGE_FORMAT_URL_ERROR = 'Неправильный формат URL.';
const MESSAGE_FORMAT_EMAIL_ERROR = 'Неправильный формат почты.';

const MESSAGE_VALID_ERROR_MOVIE_COUNTRY = 'Не указана страна происхождения.';
const MESSAGE_VALID_ERROR_MOVIE_DIRECTOR = 'Не указан режиссёр.';
const MESSAGE_VALID_ERROR_MOVIE_DURATION = 'Не указана продолжительность.';
const MESSAGE_VALID_ERROR_MOVIE_YEAR = 'Не указан год выпуска.';
const MESSAGE_VALID_ERROR_MOVIE_DESCRIPTION = 'Не указано описание.';
const MESSAGE_VALID_ERROR_MOVIE_IMAGE = 'Не указана ссылка на постер(обложку).';
const MESSAGE_VALID_ERROR_MOVIE_TRAILER_LINK = 'Не указана ссылка на трейлер.';
const MESSAGE_VALID_ERROR_MOVIE_THUMBNAIL = 'Не указана ссылка на мини-постер(обложку/иконку).';
const MESSAGE_VALID_ERROR_MOVIE_OWNER = 'Не указан пользователь, сохранивший(создавший) фильм.';
const MESSAGE_VALID_ERROR_MOVIE_MOVIE_ID = 'Не указан ID фильма.';
const MESSAGE_VALID_ERROR_MOVIE_NAME_RU = 'Не указано название фильма на русском языке.';
const MESSAGE_VALID_ERROR_MOVIE_NAME_EN = 'Не указано название фильма на английском языке.';

const MESSAGE_VALID_ERROR_USER_EMAIL = 'Заполните поле "E-mail".';
const MESSAGE_VALID_ERROR_USER_NAME = 'Заполните поле "Имя".';
const MESSAGE_VALID_ERROR_USER_NAME_MINLENGTH = 'Минимальная длина поля "Имя": 2 символа.';
const MESSAGE_VALID_ERROR_USER_NAME_MAXLENGTH = 'Максимальная длина поля "Имя": 30 символов.';
const MESSAGE_VALID_ERROR_USER_PASSWORD = 'Заполните поле "Пароль".';

module.exports = {
  REGEX_URL,
  CODE_BAD_REQUEST_ERROR,
  CODE_UNAUTHORIZED_ERROR,
  CODE_FORBIDDEN_ERROR,
  CODE_NOT_FOUND_ERROR,
  CODE_CONFLICT_ERROR,
  CODE_CENTRALIZED_ERROR,
  MESSAGE_BAD_REQUEST_ERROR_UNCORRENT_DATA,
  MESSAGE_BAD_REQUEST_ERROR_UNCORRENT_ID,
  MESSAGE_UNAUTHORIZED_ERROR_UNCORRENT_DATA,
  MESSAGE_UNAUTHORIZED_ERROR,
  MESSAGE_FORBIDDEN_ERROR_MOVIE,
  MESSAGE_NOT_FOUND_ERROR_MOVIE_ID,
  MESSAGE_NOT_FOUND_ERROR_UPDATE_PROFILE,
  MESSAGE_NOT_FOUND_ERROR_PAGE,
  MESSAGE_CONFLICT_ERROR_DUPLICATE_EMAIL,
  MESSAGE_CENTRALIZED_ERROR,
  MESSAGE_FORMAT_URL_ERROR,
  MESSAGE_FORMAT_EMAIL_ERROR,
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
  MESSAGE_VALID_ERROR_USER_EMAIL,
  MESSAGE_VALID_ERROR_USER_NAME,
  MESSAGE_VALID_ERROR_USER_NAME_MINLENGTH,
  MESSAGE_VALID_ERROR_USER_NAME_MAXLENGTH,
  MESSAGE_VALID_ERROR_USER_PASSWORD,
};
