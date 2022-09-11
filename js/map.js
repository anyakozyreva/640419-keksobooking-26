
import { setFormActive, setFiltersActive } from './form.js';
import { CENTER, ZOOM, APARTMENT_TYPE_CAPTION_MAP } from './constants.js';

const map = L.map('map-canvas').setView(CENTER, ZOOM); //это инициализация карты

export const initMap = () => {
  /* map.setView(CENTER, ZOOM);  *///при инициализации карты необходимо установить центр карты и уровнь зума
  map.whenReady(() => { //обработчик до состояния когда карта будет готова
    setFormActive();
    setFiltersActive();
  });
  const baseTiles = L.tileLayer( // baseTile - это то что будет являться базой для нашей карты
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', //адрес октуда мы берем tile
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },// какие то параметры для этого слоя til-ов (конкретно здесь copyright)
  );
  baseTiles.addTo(map);//в этом месте add tiles on map
  console.log(map);
};

// initMarkers в нее загружаю данных похожих объявлений и отрисовываю на карте

// основная или главная метка на карте будет main pin icon
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [52, 52],
});

const mainMarker = L.marker(
  CENTER,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

// another pin icon
const anotherIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [52, 52],
});


// baloon
export const baloonTultip = (it) => {
  const baloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const baloonItem = baloonTemplate.cloneNode('true');

  baloonItem.querySelector('img').src = it.author.avatar;
  baloonItem.querySelector('.popup__title').textContent = it.offer.title;
  baloonItem.querySelector('.popup__text--address').textContent = it.offer.address;
  baloonItem.querySelector('.popup__text--price').innerHTML = `${it.offer.price} <span>₽/ночь</span>`;
  baloonItem.querySelector('.popup__type').textContent = APARTMENT_TYPE_CAPTION_MAP[it.offer.type];
  baloonItem.querySelector('.popup__text--capacity').textContent = `${it.offer.rooms} комнаты для ${it.offer.guests} гостей`;
  baloonItem.querySelector('.popup__text--time').textContent = `Заезд после ${it.offer.checkin}, выезд до ${it.offer.checkout}`;

  return baloonTemplate;
};
