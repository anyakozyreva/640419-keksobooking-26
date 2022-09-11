export const ESCAPE_KEY = 'Escape';

export const SHOW_TIME = 5000;

export const MIN_STRING_LENGHT = 30;
export const MAX_STRING_LENGHT = 100;

export const AD_AMOUNT = 10;

export const PHOTOS_LINKS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

export const CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

export const APARTMENT_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

export const APARTMENT_TYPE_CAPTION_MAP = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'
};

export const APARTMENT_TYPE_PRICE_DEFAULT_MAP = {
  'flat': 1000,
  'bungalow': 0,
  'house': 5000,
  'palace': 10000,
  'hotel': 3000
};

export const TITLE = [
  'Лучшее место',
  'Классно',
  'Понравилоась',
  'Здорово'
];

export const DESCRIPTION = [
  'Описание раз',
  'Описание два',
  'Описание три',
  'Описание четыре'
];

export const APARTMENTS_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

// метод который ограничит мою карту до max и min lat & lng и не даст выйти за границу чето типа setView (то есть надо передать набор
// координат и сам все сделает)

export const CENTER = {
  lat: 35.675,
  lng: 139.750,
};

export const LOCATION_MIN_LAT = 35.65000;
export const LOCATION_MAX_LAT = 35.70000;
export const LOCATION_MIN_LNG = 139.70000;
export const LOCATION_MAX_LNG = 139.80000;

export const ZOOM = 13;

export const FILE_TYPES = [
  'gif',
  'jpg',
  'jpeg',
  'png'
];

export const APARTMENTS_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

export const MAP_LABEL = 10;
