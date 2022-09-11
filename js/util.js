import { ESCAPE_KEY } from './constants.js';
/* const ESCAPE_KEY = 'Escape'; */
// Функция, возвращающая случайное целое число из переданного диапазона включительно
export function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
export function getRandomNumber(a, b, c) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(Math.abs(c)));
};

// Устранение дребезга (debounce)
export const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

// Escape
export const isEscapeKey = (evt) => evt.key === ESCAPE_KEY;
