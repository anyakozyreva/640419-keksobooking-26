import { showMessage } from './message.js';
const FETCH_DATA_ERROR_TEXT = 'Не удалось загрузить изображения с сервера.';
const DATA_ERROR_TEXT = 'Не удалось отправить данные. Пожалуйста попробуйте позже.';
const GET_URL = 'https://26.javascript.pages.academy/keksobooking/data';
const POST_URL = 'https://26.javascript.pages.academy/keksobooking';

/* export const getData = (onSuccess, onFail) => {
  fetch(GET_URL)
    .then((response) => response.ok ? response : onFail(FETCH_DATA_ERROR_TEXT))
    .then((response) => response.json())
    .then((adverts) => onSuccess(adverts));
};
 */
export const getData = (onSuccess) => {
  fetch(GET_URL)
    .then((response) => response.json())
    .then((offers) =>  {
      onSuccess(offers);
    })
    .catch(() => {
      showMessage(FETCH_DATA_ERROR_TEXT);
    });
};

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => response.ok ? onSuccess() : onFail(DATA_ERROR_TEXT))
    .catch(() => {
      onFail(DATA_ERROR_TEXT);
    });
};
